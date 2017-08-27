'use strict';

module.exports = function(Rr) {

    Rr.register_ddu = function (ddu_id, cb) {
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
