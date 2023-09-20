require("@nomicfoundation/hardhat-toolbox");

const GETH = "YOUR RPC URL";
const PRIVATE_KEY = "PRIVATE KEY";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "Goerli",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: Goerli,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },

 
};
