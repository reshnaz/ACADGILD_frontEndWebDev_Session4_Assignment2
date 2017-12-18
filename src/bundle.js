"use strict";
exports.__esModule = true;
var interface_1 = require("./interface");
var functionality_1 = require("./functionality");
// Creating object of class implementing interface
var nsObject = new functionality_1.fns();
// Invoking functions
interface_1.foodNamespace.favoriteFood();
nsObject.dislikedFood();
