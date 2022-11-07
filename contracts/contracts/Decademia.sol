// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4 <0.9.0;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

interface IPUSHCommInterface {
    function sendNotification(address _channel, address _recipient, bytes memory _identity) external;
}

contract Decademia {

using SafeERC20 for IERC20;

struct Project {
    string ipfsCid;
    address[] investors;
    uint256[] investedAmounts;
    uint256 withdrawnAmount;
}

modifier notPaused {
      require(contractPaused == false, "Contract is Paused");
      _;
   }

modifier onlyProjectOwner {
    require(projectOwnerToProjectIDs[msg.sender].length > 0, "Not a Project Owner");
    _;
    }

modifier onlyOwner {
      require(msg.sender == owner, "Only Owner");
      _;
    }

address public owner;
uint256 public projectNum;
bool public contractPaused;
address public EPNS_COMM_ADDRESS = 0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa;
address public USDT_CONTRACT_ADDRESS = 0xd9145CCE52D386f254917e481eB44e9943F39138;

constructor() {
    owner = msg.sender;
    projectNum = 0;
    contractPaused = false;
}

mapping(address => uint256[]) public projectOwnerToProjectIDs;

mapping(uint256 => Project) public projectIDtoProject;

mapping(address => uint256[]) public investorIDtoInvestedProjects;

    function addProject(string memory ipfsCid) external notPaused {
        require(!StringCompare(ipfsCid,""), "IPFS CID cannot be blank");

        projectIDtoProject[projectNum] = Project(ipfsCid, new address[](0), new uint256[](0), 0);
        projectOwnerToProjectIDs[msg.sender].push(projectNum);
        projectNum++;

        IPUSHCommInterface(EPNS_COMM_ADDRESS).sendNotification(
    0xd35323d229318e6dCfFE4359d863b2f5453DF965, // from channel - recommended to set channel via dApp and put it's value -> then once contract is deployed, go back and add the contract address as delegate for your channel
    address(this), // to recipient, put address(this) in case you want Broadcast or Subset. For Targetted put the address to which you want to send
    bytes(
        string(
            // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
            abi.encodePacked(
                "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                "+", // segregator
                "1", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targetted or subset)
                "+", // segregator
                "New Project Added", // this is notificaiton title
                "+", // segregator
                "New Project Added by ",
                addressToString(msg.sender),
                ". Total Projects in the Platform: ",
                Strings.toString(projectNum) // notification body
            )
        )
    )
);

        // epns project created
    }

    function investInProject(uint256 projectID, uint256 amount) external notPaused {
        require(projectID < projectNum, "projectID doesn't exist");
        require(IERC20(USDT_CONTRACT_ADDRESS).balanceOf(msg.sender) > amount, "Insufficient Balance");
        projectIDtoProject[projectID].investors.push(msg.sender);
        projectIDtoProject[projectID].investedAmounts.push(amount);
        investorIDtoInvestedProjects[msg.sender].push(projectID);
        IERC20(USDT_CONTRACT_ADDRESS).safeTransferFrom(msg.sender, address(this), amount);

        IPUSHCommInterface(EPNS_COMM_ADDRESS).sendNotification(
    0xd35323d229318e6dCfFE4359d863b2f5453DF965, // from channel - recommended to set channel via dApp and put it's value -> then once contract is deployed, go back and add the contract address as delegate for your channel
    address(this), // to recipient, put address(this) in case you want Broadcast or Subset. For Targetted put the address to which you want to send
    bytes(
        string(
            // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
            abi.encodePacked(
                "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                "+", // segregator
                "1", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targetted or subset)
                "+", // segregator
                "New Project Added", // this is notificaiton title
                "+", // segregator
                "New Investor: ",
                addressToString(msg.sender),
                ". Invested: ",
                Strings.toString(amount),
                " Wei In the project with ID: ",
                Strings.toString(projectID)
                 // notification body
            )
        )
    )
);
        // epns invested in project
    }

    function viewProject(uint256 projectID) external view returns(Project memory) {
        require(projectID < projectNum, "projectID doesn't exist");
        return projectIDtoProject[projectID];
    }

    function viewInvestorProjectIDs(address investor) external view returns(uint256[] memory) {
        return investorIDtoInvestedProjects[investor];
    }

    function viewProjectOwnerProjectIDs(address projectOwner) external view returns(uint256[] memory) {
        return projectOwnerToProjectIDs[projectOwner];
    }


    function StringCompare(string memory a, string memory b) internal pure returns(bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    function withdrawFunds() external onlyProjectOwner notPaused {
        uint256 amount = 0;
        for(uint256 i = 0; i<projectOwnerToProjectIDs[msg.sender].length; i++) {
            uint256 withdrawAmountInProject = 0;
            for(uint256 j = 0; j<projectIDtoProject[projectOwnerToProjectIDs[msg.sender][i]].investedAmounts.length; j++) {
                withdrawAmountInProject += projectIDtoProject[projectOwnerToProjectIDs[msg.sender][i]].investedAmounts[j];
            }
            amount += withdrawAmountInProject - projectIDtoProject[projectOwnerToProjectIDs[msg.sender][i]].withdrawnAmount;
            projectIDtoProject[projectOwnerToProjectIDs[msg.sender][i]].withdrawnAmount += withdrawAmountInProject - projectIDtoProject[projectOwnerToProjectIDs[msg.sender][i]].withdrawnAmount;
        }
        IERC20(USDT_CONTRACT_ADDRESS).safeTransfer(msg.sender, amount);

    }

    function togglePause() external onlyOwner {
        contractPaused = !contractPaused;
    }

    function addressToString(address _address) internal pure returns(string memory) {
        bytes32 _bytes = bytes32(uint256(uint160(_address)));
        bytes memory HEX = "0123456789abcdef";
        bytes memory _string = new bytes(42);
        _string[0] = '0';
        _string[1] = 'x';
        for(uint i = 0; i < 20; i++) {
            _string[2+i*2] = HEX[uint8(_bytes[i + 12] >> 4)];
            _string[3+i*2] = HEX[uint8(_bytes[i + 12] & 0x0f)];
        }
        return string(_string);
    }

    receive() external payable {}

}