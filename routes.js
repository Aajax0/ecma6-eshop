"use strict"

var controllers = require('./controllers');

class Routes{
    constructor(server) {
        this.server = server;
    }

    install() {
        this.server.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
                reply('Welcome to eshop.io API');
            }
        });

        this.server.route({
            method: 'GET',
            path: '/categories',
            handler: controllers.categories.getAll
        });    
    }
}

module.exports = Routes;
