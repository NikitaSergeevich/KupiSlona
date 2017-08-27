'use strict';

module.exports = function(Rr) {

    Rr.register_ddu = function (ddu_id, cb) {
        // save registration req in BC
        // ask fds/hold-money
        // if ok save ddu status to registered in BC
        cb(null, ddu_id);
    };
    Rr.remoteMethod(
        'register_ddu',
        {
            accepts: [{arg: 'ddu_id', type: 'string'}],
            returns: {arg: 'result', type: 'string'},
            http: {path: '/register-ddu', verb: 'post'},
            description: "Register DDU in RR"
        }
    );

    Rr.register_rights = function (ddu_id, cb) {
        // save reg req in BC
        // try to reg DDU
        cb(null, ddu_id);
    };
    Rr.remoteMethod(
        'register_rights',
        {
            accepts: [{arg: 'ddu_id', type: 'string'}],
            returns: {arg: 'result', type: 'string'},
            http: {path: '/register-rights', verb: 'post'},
            description: "Register rights for DDU"
        }
    );
};
