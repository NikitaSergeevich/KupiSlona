'use strict';


module.exports = function (Ddu) {
    Ddu.accept_by_developer = function (ddu_id, cb) {
        // post DDU to BC
        // update etherium_id of DDU
        // results.updateAttributes({}, function () {
        // });
        // web3.eth.sendTransaction({from: '0x123...', data: '0x432...'})
        //     .once('transactionHash', function(hash){ })
        //     .once('receipt', function(receipt){ })
        //     .on('confirmation', function(confNumber, receipt){ })
        //     .on('error', function(error){ })
        //     .then(function(receipt){
        //         // will be fired once the receipt its mined
        //     });
        Ddu.contract.methods.createDdu('10', 5000).send({
            from: Ddu.ids.main
        }, function(error, result) {
            console.log('create ddu', error, result);
            if(!error) {

            }
            cb(null, result);
        });
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

    Ddu.ready = function (building_id, cb) {
        // post ready status for all DDU with building_id to BC
        cb(null, building_id);
    };
    Ddu.remoteMethod(
        'ready',
        {
            accepts: [{arg: 'building_id', type: 'string'}],
            returns: {arg: 'result', type: 'string'},
            http: {path: '/ready', verb: 'post'},
            description: "Building is ready"
        }
    );

    Ddu.on('dataSourceAttached', function (obj) {
        var remove = Ddu.remove;
        Ddu.remove = function (id, cb) {
            // cancel DDU in BC
            // return holded money to developer account
            return remove.apply(this, arguments);
        };

        var findById = Ddu.findById;
        Ddu.findById = function (id, filter, cb) {
            findById.call(this, id, filter, function (err, results) {
                // get data from BC if etherium_id presents, populate props like status
                cb(err, results);
            });
        }
    });
};
