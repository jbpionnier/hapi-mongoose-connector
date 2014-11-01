'use strict';

// Load external modules
var Code = require('code');
var Hapi = require('hapi');
var Lab = require('lab');
var Mongoose = require('mongoose');

// Load internal modules
var HapiMongooseConnector = require('../lib');

// Test shortcuts
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('Connector', function () {

    it('connects to the server', function (done) {

        var server = new Hapi.Server();

        var plugin = {
            plugin: HapiMongooseConnector,
            options: {
                uri: 'mongodb://127.0.0.1:27017/test'
            }
        };

        server.pack.register(plugin, function (err) {

            expect(err).to.not.exist();
            done();
        });
    });

    it('throws an error when connection fails', function (done) {

        var server = new Hapi.Server();

        var plugin = {
            plugin: HapiMongooseConnector,
            options: {
                uri: 'mongodb://127.0.0.1:27020/test'
            }
        };

        server.pack.register(plugin, function (err) {

            expect(err).to.exist();
            done();
        });
    });
});
