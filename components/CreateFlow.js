
import { Framework } from "@superfluid-finance/sdk-core";

//where the Superfluid logic takes place
export async function createNewFlow(recipient, flowRate) {
  const sf = await Framework.create({
    chainId: 80001,
    provider: "https://rpc-mumbai.maticvigil.com/"
  });

  const signer = sf.createSigner({
    privateKey:
      process.env.NEXT_PUBLIC_PRIVATE_KEY,
    provider: "https://rpc-mumbai.maticvigil.com/"
  });

  const DECx = "0xBF539B5604A62b7e79De6D18fc7f9d67A98bFE95";

  try {
    const createFlowOperation = sf.cfaV1.createFlow({
      flowRate: flowRate,
      receiver: recipient,
      superToken: DECx
      // userData?: string
    });

    console.log("Creating your stream...");

    const result = await createFlowOperation.exec(signer);
    console.log(result);

    console.log(
      `Congrats - you've just created a money stream!
    View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
    Network: Polygon Mumbai
    Super Token: DECx
    Sender: 0xd35323d229318e6dCfFE4359d863b2f5453DF965
    Receiver: ${recipient},
    FlowRate: ${flowRate}
    `
    );
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}