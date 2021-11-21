// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const {abi, evm} = require('./compile');

const provider = new HDWalletProvider(
  'melody water churn popular task canoe payment sting lounge iron plug panel',
  'https://rinkeby.infura.io/v3/a444a07927744bd0b246175cee4d8e80'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({data: evm.bytecode.object, arguments: ['Hi, there!']})
    .send({gas: 1000000, from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
}

deploy();
