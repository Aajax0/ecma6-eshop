"use strict"

module.exports = {
    getAll: function() {
      return new Promise(function(resolve, reject) {
          let categories = [
              { name: 'First category' },
              { name: 'Second category' }
          ];
          resolve(categories);
      })
    }
};
