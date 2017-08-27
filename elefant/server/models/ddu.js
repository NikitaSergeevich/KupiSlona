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

    Ddu.on('dataSourceAttached', function(obj){
        var remove = Ddu.remove;
        Ddu.remove = function(id, cb) {
            // cancel DDU in BC
            return remove.apply(this, arguments);
        };

        var findById = Ddu.findById;
        Ddu.findById = function(id, filter, cb) {
            var model = findById.apply(this, arguments);
            // get data from BC if etherium_id presents, populate props
            return model;
        }
    });
};
