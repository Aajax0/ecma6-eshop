"use strict"

class CategoryService{
    constructor() {
    }

    getAll() {
      return new Promise(function(resolve, reject) {
          let categories = [
              { name: 'First category' },
              { name: 'Second category' }
          ];
          resolve(categories);
      })
    }
}

module.exports = CategoryService;
