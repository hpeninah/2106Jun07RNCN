// single line comment 
/*
    multi line comment
*/
const sym = Symbol('name');
const obj = {};
obj.sym = 8;
// console.log(sym.description);
// console.log("Hello World");

// data types 
//number, boolean, string, object, null(is also a object), BigInt (big number in string form), undefined, symbol(unqiue id for referencing)
//classes are all functions, constructors in javascript 

/* 
    number - anything numerical 
    boolean - true of false
    string = any sequence of chars, denoted with '' or ""
    null - an absence of value
    undefined - an absence of balue provides by the runtime, JS default is undefined
    bigInt- a numerical representation of number larger than js can handle in string form 
    function - any repeatable logic
    symbol - a unique id 

*/

//everything in js is either an object or a function
//control flow
//control flow is the way we can programmatically control the execution 
// flow of our programs

//someone is trying to sign up to our site, they must be 13 or over

//first, hold the age in a variable

// we can create variables with three keywords 
// let, const, var 

const age = 12;

// next, we need to write logic for determining the age 
// the value of below

const overAge = (age >= 13);
//will return false;

// operators, work on data

/** 
 * mathemtical, logical, 
 * unary, binary, ternary
 * 
 *      binary 
 *          + sum
 *          - minus
 *          / divide
 *          * multiply
 *          % modulus 
 *          = assignment
 *          == comparison
 *          === strick comparison
 *          >  greater than 
 *          >= greater than or equal 
 *          < less than
 *          <= less than or equal 
 *           
 *      unary 
 *          x++ post increment
 *          ++x pre increment 
 *          x-- post decrement 
 *          --x pre increment
 * 
 *      ternary 
 *          ? : ternary operator 
 *          
 */


// if else statement

if(overAge){
    console.log("you good");
} else {
    console.log("bye");
}

//the remainder 
const something = "cool";

if(something === "cool"){
    console.log("something is cool");
} else if (something === "not cool"){
    console.log("something is not cool indeed");
} else {
    console.error("something is very wrong")
}

switch (something) {
    case "cool":
        console.log("cool");
        break;
    case "cool2":
        console.log("cool2");
        break
    default:
        break;
}

for (let i = 0; i < 10; i++) {
    console.log(i +"hello");
}


//while loop, for loop, do while loop 
/**
 * naming conventions 
 * 
 * constants are UPPERCASE aka SCREAMING SNAKE CASE
 * variables are camelCase
 * functions are camelCase
 * classes are Pasalcase 
 */

//  JSON stands for JavaScript Object Notation

//  JSON is a lightweight format for storing and transporting data
 
//  JSON is often used when data is sent from a server to a web page
 
//  JSON is "self-describing" and easy to understand

/** 
 * how is js running on the computer? 
 * code is usually compiled to machine code and then run (runtime); 
 * but JS is not a compile language but a interpret language. NodeJS takes JS, line by line and converts to C++ which is then run by
 * the OS, there are benefits but there are also cons 
 * easy to write and more abstraction but performance takes a big hit
 * nodeJS was original built with C++ from the V8 engine that works specifically for the web browser.
 * fastest at tapping underlining architechture, the event loop
 */