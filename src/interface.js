"use strict";
exports.__esModule = true;
// Below is our namespace which contains interface and function.
var foodNamespace;
(function (foodNamespace) {
    // Function that prints details about person's favorite food.
    function favoriteFood() {
        console.log("My favorite food is biryani which is a type of Indian cuisine. It is a very popular dish.");
    }
    foodNamespace.favoriteFood = favoriteFood;
})(foodNamespace = exports.foodNamespace || (exports.foodNamespace = {}));
