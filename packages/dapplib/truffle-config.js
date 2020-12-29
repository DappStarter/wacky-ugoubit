require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture struggle recipe saddle proof harvest pave army genre'; 
let testAccounts = [
"0x539ef1129f0171a34e1d0b3e46311cda6bad127f9f6b5a83c444dd2f3509d22f",
"0xab6083fa230a86922b463eb86aaa3151879d2c1fdfc1ec2b61a8378c8a469661",
"0xf94686d9d26b8c43894e7437b575c0e8e7efe663b512a0045ee743de65a2a79a",
"0xa556c176ea80133ec3c7d9c0fe04e59b55c9b3607b555661705f6a902cb2955d",
"0x902d89e39a33bf0c7dd41345256714f5f2c33b44db3db9e31ebeceab4bd95b8b",
"0x798e750428afb9e40d864eab21e78cf6de7ad34f2b099c02f9b614412db0c83b",
"0x9dd9c3a78f19b206907c52ed2c9e5cbb1b57bd9db1d056c482f6b64156c685b2",
"0x44566e158e81227ed97551dd70643441174486bfe941ce30651c551ea1004bf4",
"0x2960f30d1778909cb32d3c955e9ac11f364e5f7a51cc2121f6c58414f2a0f2d7",
"0xfb30b4e01bba95de08cb73b0930c58f1aaa0408a997cf97cf9bb36c510e660cc"
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
