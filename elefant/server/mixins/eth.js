const Web3 = require('web3');

function getContract () {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://kovan.infura.io/gn3FL6AeF2Lr0rgK82FM'));
    var jsonInterface =
        [{"constant":false,"inputs":[{"name":"_idObject","type":"string"},{"name":"_cost","type":"uint256"}],"name":"createDdu","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"seller","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fds","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"buyer","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"rosreestr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dduorderContract","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_buyer","type":"address"},{"name":"_seller","type":"address"},{"name":"_rosreestr","type":"address"},{"name":"_fds","type":"address"}],"name":"createUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]
    ;
    var contractAddress = '0x24eEa7374bDf34DCCF481788Fb16E9a1a0D58133';
    var contract = new web3.eth.Contract(jsonInterface, contractAddress);
    return contract;
}

module.exports = function(Model, options) {
    'use strict';
    Model.contract = getContract();
    Model.ids = {
        phys: '0x4088f8A4513691b97D5bD72C71DC22Ee22018E1e',
        developer: '0xc8612eea5aB2E834AcC3d79e98D4Cbb7ddeB7054',
        main: '0xBdB286727D6edDf783db682DD01bF712B0b83dDF',
        rr: '0x4662e767dD94F75dc339290f5f7810E35abF3050',
        fds: '0x24eEa7374bDf34DCCF481788Fb16E9a1a0D58133'
    };
};
