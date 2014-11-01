'use strict';

// Load external modules
var Mongoose = require('mongoose');


exports.register = function (plugin, options, next) {

	Mongoose.connect('mongodb://' + options.uri, function (err) {
        next(err);
    });
};


exports.register.attributes = {
    pkg: require('../package.json')
};
