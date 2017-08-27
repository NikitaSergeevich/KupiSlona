'use strict';

module.exports = function (Money) {
    Money.disableRemoteMethodByName("deleteById", true);
    Money.disableRemoteMethodByName("findById", true);
};
