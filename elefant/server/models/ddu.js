'use strict';

module.exports = function (Ddu) {
    Ddu.accept_by_developer = function (ddu_id, cb) {
        // post to BC
        // update etherium_id of DDU
        cb(null, ddu_id);
    };
    Ddu.remoteMethod(
        'accept_by_developer',
        {
            accepts: [{arg: 'ddu_id', type: 'string'}],
            returns: {arg: 'result', type: 'string'},
            http: {path: '/accept-by-developer', verb: 'post'},
            description: "Accept DDU by developer and post it to blockchain"
        }
    );
};
