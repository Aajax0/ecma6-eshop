"use strict"

var CategoryService = require('./categoryService');
var ProductService = require('./productService');

module.exports.categories = new CategoryService();
module.exports.products = new ProductService();
