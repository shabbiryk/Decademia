/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
// const {infuraProjectId, privateKey, etherscanAPIkey} = require('./secrets.json');
const infuraProjectId = process.env.INFURA_API_KEY
const privateKey = process.env.WALLET_PRIVATE_KEY
const polycanAPIkey = process.env.ETHERSCAN_API_KEY
module.exports = {
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraProjectId}`,
      accounts: [privateKey],
      }
    },
  
    etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey: polyscanAPIkey
    },
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
