require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/0jn7pRcjNn6WMElrtp24gBLIwNrO_Tcf",
      accounts: ["45a748dd464253f9f21d62bd92973ebf545d9992d1b2d6ac717c1421ad33c8b7"]
    }
  }
};