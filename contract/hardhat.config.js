require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/dsPyXyKXG_bP8cuv4ieX_L3KSJVkkZVP",
      accounts: ["63443c630b26fc5b7d5664d71165d72494cd756ca53cf4ab7629e927aa9430a5"]
    }
  },
};