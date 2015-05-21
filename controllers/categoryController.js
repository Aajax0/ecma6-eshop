"use strict"

var services = require('../services');

class CategoryController{
    constructor() {
    }

    getAll(request, reply) {
        services.categories.getAll().then(function(categories){
            reply(categories);
        });
    }
}

module.exports = CategoryController;
