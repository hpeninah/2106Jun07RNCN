// single line comment
/*
    multi line comment
*/

//print hello world

//class First{}

function First(){
    this.something = 0;
}

const first = new First();

const sym = Symbol('name');
const obj = {};
obj.sym = 8;
console.log(obj.sym);

console.log("Hello World!");
console.log(typeof First);

//Data Types
//  number (integer, decimals, etc), boolean (true or false), string (Characters or a collection of words), 
//  objects (Key value pair. States and Behaviors), null, BigInt, undefined, function, symbol
/*
    number => Anything numerical
    boolean => True or False
    string => Any sequence of characters, denoted with '' or ""
    object => a key value pair of states and behaviors
    null => an absence of a value
    undefined => an absence of value provided by the runtime
    bigInt => a numerical representation of a number larger than js
    function => any repeatable logic
    symbol => A unique identifier that would be impossible to duplicate
*/

//control flow
//  Control flow is the way we can programmatically 
//      control the executive flow of our programs.

//Someone is trying to sign up to our site, however they must be 13 or over.
//First, hold the age in a variable.
//      We can create variables with three keywords
//          let, const, and var
const age = 12;

//Next, we need to write logic for determining the age.
//      The value of below will be a boolean value (True or false)
const overAge = (age >= 13);

//Operators, work on data
/* 
    Mathematical, Logical
    unary, binary, ternary

        binary
            +   sum
            -   minus
            /   divide
            *   multiply
            %   modulus
            =   assignment
            ==  comparison
            === strict comparison
            >   GT
            >=  GTE
            <   LT
            <=  LTE


        unary
            x++ post increment
            ++x pre increment
            x-- post decrement
            --x pre decrement

        ternary
                    x = x < 1 ? x : 1;
            ? :     ternary operator
*/

console.log(8 == '8'); //Just takes the first data variable
console.log(8 === '8'); //Compares the entire entity

//if else statement
if(overAge){
    console.log("The person is of age to join the site.")
} else {
    console.log("The securite check is too good for this.")
}





