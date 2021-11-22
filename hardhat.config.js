require("@nomiclabs/hardhat-ethers");
require('dotenv').config()
 
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "localhost",
    networks: {
        hardhat: {
            // // If you want to do some forking, uncomment this
            // forking: {
            //   url: MAINNET_RPC_URL
            // }
        },
        localhost: {
          url: "http://127.0.0.1:8545"
        },
        kovan: {
            url: process.env.KOVAN_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            saveDeployments: true,
        },
        ropsten: {
          url: process.env.ROPSTEN_RPC_URL,
          accounts: [process.env.PRIVATE_KEY],
          saveDeployments: true,
      }
    },
  solidity: "0.8.4",
};
