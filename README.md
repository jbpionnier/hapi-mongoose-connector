# Hapi Mongoose Connector

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

var plugin = {
    plugin: HapiMongooseConnector,
    options: {
        uri: '127.0.0.1:27020/test'
    }
};

server.pack.register(plugin, function (err) {

    ...
});
```
