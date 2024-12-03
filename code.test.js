const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);


function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}

//created a tolerence as wiggle room that allows for differences within answers due to approximation
//using this function to decide if teh difference is close enough to be considered true, and if not it'd be false
//
function isApproxEqual(actual, expected, tolerance = 1e-10) {
    return Math.abs(actual - expected) <= tolerance;
}

// Test factorial function
console.log("Testing factorial function...");
assert(factorial(0) === 1, "factorial(0) should be 1");
assert(factorial(1) === 1, "factorial(1) should be 1");
assert(factorial(5) === 120, "factorial(5) should be 120");
assert(factorial(10) === 3628800, "factorial(10) should be 3628800");

console.log("factorial tests passed!");

// Test e function
console.log("Testing e function...");
assert(isApproxEqual(e(0), 1), "e(0) should be 1");
assert(isApproxEqual(e(1), 2), "e(1) should be approximately 2");
assert(isApproxEqual(e(2), 2.5), "e(2) should be approximately 2.5");
assert(isApproxEqual(e(5), 2.7166666666666663), "e(5) should be approximately 2.716666...");
assert(isApproxEqual(e(10), 2.7182818011463845), "e(10) should be approximately 2.7182818...");

console.log("e function tests passed!");
