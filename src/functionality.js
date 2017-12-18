"use strict";
exports.__esModule = true;
// Here we include another function under same namespace referenced from interface.ts file.
// Function that prints details about person's most disliked food.
var fns = /** @class */ (function () {
    function fns() {
    }
    fns.prototype.dislikedFood = function () {
        console.log("The food I hate most is pizza which is a type of Italian cuisine. It is very popular.");
    };
    return fns;
}());
exports.fns = fns;
