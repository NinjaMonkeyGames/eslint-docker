/*eslint valid-jsdoc: "error"*/

// expected @param tag for parameter num1 but found num instead
// missing @param tag for parameter num2
// missing return type
/**
 * Add two numbers.
 * @param {number} num The first number.
 * @returns The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}

// missing brace
// missing @returns tag
/**
 * @param {string name Whom to greet.
 */
function greet(name) {
    console.log("Hello " + name);
}

// missing parameter type for num1
// missing parameter description for num2
/**
 * Represents a sum.
 * @constructor
 * @param num1 The first number.
 * @param {number} num2
 */
function sum(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}