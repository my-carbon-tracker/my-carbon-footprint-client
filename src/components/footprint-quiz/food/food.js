"use strict";
/* Unit: kgCO2eq */
Object.defineProperty(exports, "__esModule", { value: true });
/* http://www.greeneatz.com/foods-carbon-footprint.html */
//serving size 4 oz
const lamb = {emissionsPerKilo:39.2, emissionsPerServing:3.348};
const beef = {emissionsPerKilo:27.0, emissionsPerServing:3.067};
const redMeat = {emissionsPerServing:(lamb.emissionsPerServing + beef.emissionsPerServing) / 2};
//serving size 1 oz
const cheese = {emissionsPerKilo:13.5, emissionsPerServing:0.383};
//serving size 3 oz
const pork = {emissionsPerKilo:12.1, emissionsPerServing:1.029};
//serving size 3 oz
const turkey = {emissionsPerKilo:10.9, emissionsPerServing:0.927};
//serving size 4 oz
const chicken = {emissionsPerKilo:6.9, emissionsPerServing:0.782};
const whiteMeat = {emissionsPerServing:(pork.emissionsPerServing + turkey.emissionsPerServing + chicken.emissionsPerServing) / 3};
//serving size 3.5 oz
const tuna = {emissionsPerKilo:6.1, emissionsPerServing:0.605};
const fish = tuna;
//serving size 50 g
const eggs = {emissionsPerKilo:4.8, emissionsPerServing:0.24};
//serving size 1 cup
const potatoes = {emissionsPerKilo:2.9, emissionsPerServing:0.585};
//serving size 1/2 cup
const rice = {emissionsPerKilo:2.7, emissionsPerServing:0.272};
//serving size 1.5 oz
const nuts = {emissionsPerKilo:2.3, emissionsPerServing:0.098};
//serving size 113.4 grams
const beans = {emissionsPerKilo:2.0, emissionsPerServing:0.227};
//serving size 150 grams
const tofu = {emissionsPerKilo:2.0, emissionsPerServing:0.3};
//serving size 1/2 cup
const vegetables = {emissionsPerKilo:2.0, emissionsPerServing:0.202};
//serving size 1 cup
const milk = {emissionsPerKilo:1.9, emissionsPerServing:0.383};
//serving size 1/2 cup
const fruit = {emissionsPerKilo:1.1, emissionsPerServing:0.112};
//serving size 1.5 cups
const lentils = {emissionsPerKilo:0.9, emissionsPerServing:0.272};
/* https://www.bilans-ges.ademe.fr/ */
//serving size 6 oz
const coffee = {emissionsPerKilo:3.14, emissionsPerServing:0.534};
//serving size 
const chocolate = {emissionsPerKilo:4.87, emissionsPerServing:0.138};
exports.default = {
    coffee,
    chocolate,
    redMeat,
    whiteMeat,
    fish,
    lamb,
    beef,
    cheese,
    pork,
    turkey,
    chicken,
    tuna,
    eggs,
    potatoes,
    rice,
    nuts,
    beans,
    tofu,
    vegetables,
    milk,
    fruit,
    lentils,
};