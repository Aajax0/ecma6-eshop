var Hapi = require('hapi');
var Routes = require('./routes');

var server = new Hapi.Server();
var routes = new Routes(server);

server.connection({ port: 8081 });
routes.install();

server.start(function () {
    console.log('Server running at:', server.info.uri);
})


// server.pack.require({ lout: { endpoint: '/docs' } }, function (err) {
//     if (err) {
//         console.log('failed loading plugins');
//     }
// });
