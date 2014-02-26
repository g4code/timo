
var should = require("chai").should(),
    suite  = require("../suite"),
    timo   = require(suite.path("timo"))
    moment = require("moment");

describe("timo", function(){

    beforeEach(function() {
        timo.timer = {
            start  : null,
            end    : null,
            elapsed: null
        };
    });

    describe("start", function() {

        it("shoud set start time", function() {
            
            timo.start();
            timo.timer.start.should.equal(new Date().getTime());
        });
    });
    
    describe("stop", function() {

        it("shoud set stop time", function() {
            
            timo.stop();
            timo.timer.stop.should.equal(new Date().getTime());
        });
    });

    describe("duration", function() {

        it("shoud measure elapsed time in seconds", function() {
            
            timo.timer.start = 1393229088423;
            timo.timer.stop  = 1393229109470;
            timo.duration().should.equal("21 seconds 47 milliseconds ");
            
            1393232055135
        });
        
        it("shoud measure elapsed time in minutes", function() {
            
            timo.timer.start = 1393229088423;
            timo.timer.stop  = 1393232055135;
            timo.duration().should.equal("49 minutes 26 seconds ");
        });
        
        it("shoud measure elapsed time in one minute", function() {
            
            timo.timer.start = 1393229088423;
            timo.timer.stop  = 1393229188423;
            timo.duration().should.equal("1 minute 40 seconds ");
        });
        
        it("shoud measure elapsed time in one second", function() {
            
            timo.timer.start = 1393229088423;
            timo.timer.stop  = 1393229089425;
            timo.duration().should.equal("1 second 2 milliseconds ");
        });
    });
});