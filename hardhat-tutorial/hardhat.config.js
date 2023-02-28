require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://autumn-alpha-leaf.ethereum-goerli.discover.quiknode.pro/446bda12bb52016ca4a5fb03c6c964d750bd1001/',
      accounts: ['d1eb72af7fb443c458395fb4e0a1e376768e99e991a90899edf07f3b15340619'],
    },
  },
};