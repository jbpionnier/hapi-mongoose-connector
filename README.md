# Hapi Mongoose Connector [![Build Status](https://travis-ci.org/gergoerdosi/hapi-mongoose-connector.svg)](https://travis-ci.org/gergoerdosi/hapi-mongoose-connector)


Mongoose connector plugin for the hapi framework.

## Installation

```
npm install hapi-mongoose-connector
```

## Usage

The plugin accepts a string `<hostname><:port>/<database>` parameter to connect to the MongoDB instance on the `<hostname><:port>`. Example:

```
var Hapi = require('hapi');
var HapiMongooseConnector = require('hapi-mongoose-connector');

var server = new Hapi.Server();
server.connection();

var plugin = {
    register: HapiMongooseConnector,
    options: {
        uri: '127.0.0.1:27017/test'
    }
};

server.register(plugin, function (err) {

    ...
});
```
