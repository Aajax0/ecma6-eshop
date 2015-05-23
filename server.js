var Hapi = require('hapi');
var lout = require('lout');
var Routes = require('./routes');

var server = new Hapi.Server();
var routes = new Routes(server);

server.connection({ port: 8081 });
routes.install();

server.register({ register: lout }, function(err) {
    if (err) {
        console.log('failed loading lout');
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
