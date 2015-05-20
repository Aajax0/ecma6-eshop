"use strict"

var services = require('../services');

module.exports = {
    getAll: function(request, reply) {
        services.categories.getAll().then(function(categories){
            reply(categories);
        });
    }
};
