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
        server.connection();

        var plugin = {
            register: HapiMongooseConnector,
            options: {
                uri: '127.0.0.1:27017/test'
            }
        };

        server.register(plugin, function (err) {

            expect(err).to.not.exist();
            server.stop(done);
        });
    });

    it('throws an error when configuration is invalid', function (done) {

        var server = new Hapi.Server();
        server.connection();

        var plugin = {
            register: HapiMongooseConnector,
            options: {}
        };

        server.register(plugin, function (err) {

            expect(err).to.exist();
            expect(err.message).to.equal('uri is required');
            server.stop(done);
        });
    });

    it('throws an error when connection fails', function (done) {

        var server = new Hapi.Server();
        server.connection();

        var plugin = {
            register: HapiMongooseConnector,
            options: {
                uri: '127.0.0.1:27020/test'
            }
        };

        server.register(plugin, function (err) {

            expect(err).to.exist();
            server.stop(done);
        });
    });

    it('closes the connection when server stops', function (done) {

        var server = new Hapi.Server();
        server.connection();

        var plugin = {
            register: HapiMongooseConnector,
            options: {
                uri: '127.0.0.1:27017/test'
            }
        };

        server.register(plugin, function (err) {

            expect(err).to.not.exist();

            server.stop(function () {

                expect(Mongoose.connection.readyState).to.equal(0);
                server.stop(done);
            });
        });
    });
});
