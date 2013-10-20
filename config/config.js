'use strict';

var config  = require('sowa-shared').config;

module.exports = function(app, express, rootPath) {
    config.initalize(app, express, rootPath);

};

