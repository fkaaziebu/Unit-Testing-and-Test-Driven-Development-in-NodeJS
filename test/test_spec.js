var expect = require("chai").expect;

describe("test_suite1", function() {
    describe("test_suite3", function() {
        it("test3", function() {
            expect(true).to.equal(true);
        })
    })
    it("test1", function() {
        expect(true).to.equal(true)
    })
})

describe("test_suite2", function() {
    it("test2", function() {
        expect(true).to.equal(true)
    })
})