let rentCar = require("./rentCar");
let {assert} = require("chai");

describe("Tests", () => {
    describe("searchCar tests", () => {

        it("check models", () => {  
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "BMW"), `There is 1 car of model BMW in the catalog!`);
            assert.equal(rentCar.searchCar(["Volkswagen", "Mercedes", "Audi", "Mercedes"], "Mercedes"), `There is 2 car of model Mercedes in the catalog!`);
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW", "BMW"], "BMW"), `There is 3 car of model BMW in the catalog!`);
        })

        it("invalid input", () => {
            assert.throw(() => rentCar.searchCar(4, 8), "Invalid input!");
            assert.throw(() => rentCar.searchCar("String", "BMW"), "Invalid input!");
            assert.throw(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 5), "Invalid input!");
            assert.throw(() => rentCar.searchCar(5, {}), "Invalid input!");
        })

        it("no matching elements", () => {
            assert.throw(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Mercedes"), "There are no such models in the catalog!");
            assert.throw(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Lada"], "Mercedes"), "There are no such models in the catalog!");

        })

         
    })

    describe("calculatePriceOfCar tests", () => {

        it("invalid input test", () => {
            assert.throw(() => rentCar.calculatePriceOfCar({},5), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar([],3), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar(4,"Sharo"), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar("Sharo",{}), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar(4,"Sharo"), "Invalid input!");
        })

        it("cost per day test", () => {
            assert.equal(rentCar.calculatePriceOfCar("BMW", 2), `You choose BMW and it will cost $90!`);
            assert.equal(rentCar.calculatePriceOfCar("Mercedes", 3), `You choose Mercedes and it will cost $150!`);
            assert.equal(rentCar.calculatePriceOfCar("Toyota", 1), `You choose Toyota and it will cost $40!`);

        })

        it("no model in catalog test", () => {
            assert.throw(() => rentCar.calculatePriceOfCar("Lada", 1), "No such model in the catalog!");
            assert.throw(() => rentCar.calculatePriceOfCar("Opel", 5), "No such model in the catalog!");
        })

    })

    describe("checkBudget tests", () => {

       // costPerDay, days, budget

        it("invalid input", () => {
            assert.throw(() => rentCar.checkBudget("Sharo",4,5), "Invalid input!");
            assert.throw(() => rentCar.checkBudget([],4,5), "Invalid input!");
            assert.throw(() => rentCar.checkBudget({},4,5), "Invalid input!");
            assert.throw(() => rentCar.checkBudget("Sharo",4,"Sharo"), "Invalid input!");
            assert.throw(() => rentCar.checkBudget("Sharo",{},"Sharo"), "Invalid input!");
            assert.throw(() => rentCar.checkBudget(4,"Sharo",{}), "Invalid input!");
            assert.throw(() => rentCar.checkBudget(4,"Rex",5), "Invalid input!");
            assert.throw(() => rentCar.checkBudget(5,4,[]), "Invalid input!");
        })


        it("budget test", () => {
            assert.equal(rentCar.checkBudget(10,2,50), `You rent a car!`);
            assert.equal(rentCar.checkBudget(10,5,50), `You rent a car!`);
        })

        it("needed budget test", () => {
            assert.equal(rentCar.checkBudget(10,8,50), 'You need a bigger budget!');
            assert.equal(rentCar.checkBudget(10,7,50), 'You need a bigger budget!');
        })
        
    })
}) 