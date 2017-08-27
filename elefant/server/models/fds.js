'use strict';

module.exports = function(Fds) {

    Fds.accept_money = function (money_id, cb) {
        // get transaction amount
        // update account of developer in BC
        // remove pending transaction
        cb(null, money_id);
    };
    Fds.remoteMethod(
        'accept_money',
        {
            accepts: [{arg: 'money_id', type: 'string'}],
            returns: {arg: 'result', type: 'string'},
            http: {path: '/accept-money', verb: 'post'},
            description: "Accept money from developer to fds"
        }
    );

    Fds.hold_money = function (ddu_id, cb) {
        // check if account of developer has enough money
        // if yes hold them in BC and return ok
        // else return err
        cb(null, ddu_id);
    };
    Fds.remoteMethod(
        'hold_money',
        {
            accepts: [{arg: 'ddu_id', type: 'string'}],
            returns: {arg: 'result', type: 'string'},
            http: {path: '/hold-money', verb: 'post'},
            description: "Hold money for DDU in developer account of fds"
        }
    );


    Fds.pay_money = function (ddu_id, cb) {
        cb(null, ddu_id);
    };
    Fds.remoteMethod(
        'pay_money',
        {
            accepts: [{arg: 'ddu_id', type: 'string'}],
            returns: {arg: 'result', type: 'string'},
            http: {path: '/pay-money', verb: 'post'},
            description: "Remove held money for ddu from developer account"
        }
    );
};
