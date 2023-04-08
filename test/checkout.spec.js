const Checkout = require("../checkout")
const expect = require("chai").expect;

let checkout;
beforeEach(() => {
    checkout = new Checkout();
    checkout.addItemPrice("a", 1);
    checkout.addItemPrice("b", 2);
});

it("Can calculate the current total", () => {
    checkout.addItem("a");
    expect(checkout.calculateTotal()).to.equal(1);
});

it("Can add multiple items and get correct total", () => {
    checkout.addItem("a");
    checkout.addItem("b");
    expect(checkout.calculateTotal()).to.equal(3);
})

it("Can add discount rules", () => {
    checkout.addDiscount("a", 3, 2);
})

it("Can apply discount rules to the total", () => {
    checkout.addDiscount("a", 3, 2);
    checkout.addItem("a");
    checkout.addItem("a");
    checkout.addItem("a");
    expect(checkout.calculateTotal()).to.equal(2);
})

it("Throws an exception when item added with no price", () => {
    expect(() => checkout.addItem("c")).to.throw();
})


/* TODO LIST */
/*
x Can create an instance of the Checlout class
x Can add an item price
x Can add an item
x Can calculate the current total
x Can add multiple items and get correct total
x Can add discount rules
x Can apply discount rules to the total
x Exception is thrown for item added without price
*/