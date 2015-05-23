"use strict"

var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies);
var categoryController = require("../../controllers").categories;

describe('CategoryController', function(){
    it('should exists', function(){
        expect(categoryController).to.not.be.undefined;
    });

    // describe('#getAll()', function(){
    //     it('should accept "reply" argument and call it', function(done){
    //         let request = {};
    //         let reply = function() {
    //             done();
    //         };
    //
    //         let spy = chai.spy(reply);
    //
    //         categoryController.getAll(request, reply);
    //
    //         expect(spy).to.have.been.called.once;
    //     })
    // })
});
