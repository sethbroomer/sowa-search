'use strict';

var nconf    = require('sowa-shared').nconf,
    express  = require('express'),
    app      = express();

require('./config/config')(app, express, __dirname);

app.listen(nconf.get('node_port'));
