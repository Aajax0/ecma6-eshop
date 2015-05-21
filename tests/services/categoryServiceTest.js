"use strict"

var expect = require('chai').expect;
var categoryService = require("../../services").categories;

describe('CategoryService', function(){
    it('should exists', function(){
        expect(categoryService).to.not.be.undefined;
    });

    describe('#getAll()', function(){
        it('should return a promise', function(){
            let returnValue = categoryService.getAll();
            expect(returnValue).to.be.an.instanceof(Promise);
        })

        it('should promise an array value', function(){
            categoryService.getAll().then(function(categories){
                expect(returnValue).to.be.an.instanceof(Array);
            });
        })
    })
});
