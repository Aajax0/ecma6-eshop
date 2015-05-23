"use strict"

class CategoryService{
    constructor() {
        this._categories = [
          {
              id: 1,
              title: 'First category'
          },
          {
              id: 2,
              title: 'Second category'
          },
          {
              id: 3,
              title: 'Subcategory A',
              parentId: 1
          },
          {
              id: 4,
              title: 'Subcategory B',
              parentId: 1
          },
        ];
    }

    getById(id){
        let that = this;
        return new Promise(function(resolve, reject) {
            for (let i = 0; i < that._categories.length; i++) {
                let category = that._categories[i];
                if (category.id === id){
                    resolve(category);
                }
            }
            resolve(null);
        });
    }

    getAll() {
        let that = this;
        return new Promise(function(resolve, reject) {
            //covert array to map of ids
            let map = new Map();
            for (let i = 0; i < that._categories.length; i++) {
                let category = clone(that._categories[i]); //<--- replace clone() with Object.assign when implemented
                map.set(category.id, category);
            }

            //assign children to parents and return roots
            let rootCategories = [];
            for (let category of map.values()) {
                if (category.parentId) {
                    let parent = map.get(category.parentId)
                    if (!parent.children) {
                        parent.children = [];
                    }
                    parent.children.push(category);
                    delete category.parentId;
                } else {
                    rootCategories.push(category);
                }
            }

            resolve(rootCategories);
        })
    }
}

//remove when Object.assign is implemented
let clone = function(src) {
    let dst = {};
    Object.keys(src).forEach(function(k) {
        dst[k] = src[k];
    });
    return dst;
}

module.exports = CategoryService;
