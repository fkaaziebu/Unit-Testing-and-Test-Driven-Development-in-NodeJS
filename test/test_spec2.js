var expect = require("chai").expect;

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

describe("test_suite2", function() {
    it("test1", function() {
        expect(true).to.equal(true)
    })
})