const ProxyDelegate = artifacts.require('ProxyDelegate');
const SomeLibrary = artifacts.require('SomeLibrary');
const NewProxyDelegate = artifacts.require('NewProxyDelegate');

module.exports = function(deployer) {
    deployer.deploy(SomeLibrary)
    .then(() => deployer.deploy(ProxyDelegate, SomeLibrary.address));
    deployer.deploy(SomeLibrary)
    .then(() => deployer.deploy(NewProxyDelegate, SomeLibrary.address));
}