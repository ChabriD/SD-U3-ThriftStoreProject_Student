//? This array is not to be changed.
const salesTax = [
    {state: 'Alabama', tax: .04},
    {state: 'Alaska', tax: .00},
    {state: 'Arizona', tax: .056},
    {state: 'Arkansas', tax: .065},
    {state: 'California', tax: .0725},
    {state: 'Colorado', tax: .029},
    {state: 'Connecticut', tax: .0635},
    {state: 'Delaware', tax: .00},
    {state: 'DC', tax: .06},
    {state: 'Florida', tax: .06},
    {state: 'Georgia', tax: .04},
    {state: 'Hawaii', tax: .04166},
    {state: 'Idaho', tax: .06},
    {state: 'Illinois', tax: .0625},
    {state: 'Indiana', tax: .07},
    {state: 'Iowa', tax: .06},
    {state: 'Kansas', tax: .065},
    {state: 'Kentucky', tax: .06},
    {state: 'Louisiana', tax: .0445},
    {state: 'Maine', tax: .055},
    {state: 'Maryland', tax: .06},
    {state: 'Massachusetts', tax: .0625},
    {state: 'Michigan', tax: .06},
    {state: 'Minnesota', tax: .06875},
    {state: 'Mississippi', tax: .07},
    {state: 'Missouri', tax: .04225},
    {state: 'Montana', tax: .00},
    {state: 'Nebraska', tax: .055},
    {state: 'Nevada', tax: .0685},
    {state: 'New Hampshire', tax: .00},
    {state: 'New Jersey', tax: .06625},
    {state: 'New Mexico', tax: .05125},
    {state: 'New York', tax: .04},
    {state: 'North Carolina', tax: .0475},
    {state: 'North Dakota', tax: .05},
    {state: 'Ohio', tax: .0575},
    {state: 'Oklahoma', tax: .045},
    {state: 'Oregon', tax: .00},
    {state: 'Pennsylvania', tax: .06},
    {state: 'Rhode Island', tax: .07},
    {state: 'South Carolina', tax: .06},
    {state: 'South Dakota', tax: .06},
    {state: 'Tennessee', tax: .07},
    {state: 'Texas', tax: .0625},
    {state: 'Utah', tax: .061},
    {state: 'Vermont', tax: .06},
    {state: 'Virginia', tax: .053},
    {state: 'Washington', tax: .065},
    {state: 'West Virginia', tax: .06},
    {state: 'Wisconsin', tax: .05},
    {state: 'Wyoming', tax: .04},
];

//! Classes

class Store {
    constructor(name,location,sales_tax, inventory,balance, expenses,profit,paid_tax){
        this.name = name;
        this.location = location;
        this.sales_tax = sales_tax;
        this.inventory = inventory;
        this.balance = balance;
        this.expenses = expenses;
        this.profit = profit;
        this.paid_tax = paid_tax;
        add: function()
        sell: function()


    }

    
}

class Product {
    constructor(upc,name,type,purchase_price,quantity,market_price){
        this.upc = upc;
        this.name = name;
        this.type = type;
        this.purchase_price = purchase_price;
        this.quantity = quantity;
        this.market_price = market;
    }

}

//! CREATE STORES
// Generate 3 different stores, each in a different state.

let store1 = {
    name: walmart,
    location: [
        City: Houston,
        State: Texas, 
    ],
    sales_tax:
    inventory: 0,
    balance: 150,
    expenses: 0,
    profit: 0,
    paid_tax:
}

let store2 = {
    name: Kohls,
    location: [
        City: LA,
        State: California
    ]
    sales_tax:
    inventory: 0,
    balance: 250,
    expenses: 0
    profit:0
    paid_tax:
}

let store3 = {
    name: Food Lion,
    location: [
        City:
        State:
    ]
    sales_tax:
    inventory: 0
    balance: 100,
    expenses: 0,
    profit: 0,
    paid_tax:
}

//! Inventory

let inventory = ["Spoons", "Plates", "Candles", "Cleaning Supplies"];

//! Stocking

//* First Store

//* Second Store

//* Third Store

//! Selling

//* First Store

//* Second Store

//* Third Store

//! Testing
/* 
    Simply console log each store to check the completed details.
*/

