import { Alchemy, Network, Utils } from "alchemy-sdk";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

const useWeb3 = () => {
  async function getBlockNumber() {
    return alchemy.core.getBlockNumber();
  }

  const getTransactions = async (blockNumber) => {
    let response = await alchemy.core.getBlockWithTransactions(blockNumber);
    return response.transactions.map((tx) => {
      return {
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: Utils.formatEther(tx.value).toString(),
        gasPrice: Utils.formatEther(tx.gasPrice).toString(),
        nonce: tx.nonce,
      };
    }).sort((a, b) => {
      return b.value - a.value;
    });
  };

  return {
    getBlockNumber,
    getTransactions,
  };
};

export default useWeb3;
