'use strict';

// Load external modules
var Mongoose = require('mongoose');
var Joi = require('joi');

// Declare internals
var internals = {};

internals.schema = Joi.object({
    uri: Joi.string().required()
});


exports.register = function (plugin, options, next) {

	var result = Joi.validate(options, internals.schema);

    if (result.error) {
        return next(result.error);
    }

    plugin.on('stop', function () {

        Mongoose.connection.close();
    });

	Mongoose.connect('mongodb://' + options.uri, function (err) {
        next(err);
    });
};


exports.register.attributes = {
    pkg: require('../package.json')
};
