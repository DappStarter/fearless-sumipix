require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind huge hope entire bottom valid'; 
let testAccounts = [
"0x0837a68809ad1326305444fbdc5b1d62b8730b39958dabf7fe4ed85bc1c1739c",
"0x04ef299b97ae2517d23ef78d9094475deaec80f50a9ffc7dd4bac9fbbd5f9c9c",
"0x7de8ae76c224bb324013c4b12b7f5fc57819b3485c1bc84045dc31c2c48d4e36",
"0xc29f762e1e64f218b428e559c7912c935d886b7256383af618c28385dfbaed27",
"0x96ce9354188aeefd24835f6f8dd85ae0e12ff96c85763e0c5b0a0cbfa5f148cc",
"0x5eece642e332dc4f8cd235277bcbe83d51a2e36dc887dda5ea35abe6a7dde83d",
"0x87d4ce57e06ec524948447feaad963e47db0a01cddd84a58b8e7a80781d2d6f1",
"0x25dc40e162f33fdfe807318fd677daf0b161d3fb079282b994e703bc988f03d5",
"0xd5a86f1ea1260210c5bc37183afde1be71ce6da45d6fa6b22ec9aea66e7b64a5",
"0x76eecda53629d7753508493ca5da49fa08d43450730ae6f5f37a415b4db20b65"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
