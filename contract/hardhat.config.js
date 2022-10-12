require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  etherscan: {
    apiKey: {
      goerli: 'X7JW6ECNQVGV3MWA2YX8B12QYSPIC1BA2G'
    }
  },
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/GhNGluSxXiL7-_pHa0Lb6Zra-j0EdA79",
      accounts: ["63443c630b26fc5b7d5664d71165d72494cd756ca53cf4ab7629e927aa9430a5"]
    }
  },
};