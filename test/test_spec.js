var expect = require("chai").expect;

describe("test_suite1", function() {
    before("setup code", function() {
        console.log("Setup code");
    })
    after("teardwon code", function() {
        console.log("Teardown code");
    })
    beforeEach("setup for each test", function() {
        console.log("Setup code for each test");
    })
    afterEach("teardown for each test", function() {
        console.log("Teardown code for each test");
    })
    it("test1", function() {
        expect(true).to.equal(true)
    })
})