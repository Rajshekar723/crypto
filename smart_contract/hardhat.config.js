//https://eth-ropsten.alchemyapi.io/v2/l_qQy5lIPE450VuByBouXdl86cxySMWB
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/l_qQy5lIPE450VuByBouXdl86cxySMWB",
      accounts: [
        "bbd376f15164848a788ad73c14b191bd28526f3f557de6510286d9cbd24ae859",
      ],
    },
  },
};
