Variables and Basic Operators 
Objective: 
Understand how to declare variables and use basic operators in JavaScript. 

Declaring Variables: 
var: 
Function-scoped. 
Can be re-declared and updated. 
Example: 
var name = "Alice"; 
name = "Bob"; // Allowed 
var name = "Charlie"; // Allowed 
 

let: 
Block-scoped. 
Can be updated but not re-declared within the same scope. 
Example: 
let age = 25; 
age = 30; // Allowed  
let age = 35; // Not allowed within the same scope 


const: 
Block-scoped. 
Cannot be updated or re-declared. 
Must be initialized at the time of declaration. 
Example: 
const isStudent = true; 
isStudent = false; // Not allowed 
const isStudent = false; // Not allowed within the same scope 
 

Basic Operators: 
Arithmetic Operators: 
+ (addition), - (subtraction), * (multiplication), / (division), % (modulus) 
Example: 
let x = 10; 
let y = 5; 
let sum = x + y; // 15 
let difference = x - y; // 5 
let product = x * y; // 50 
let quotient = x / y; // 2 
let remainder = x % y; // 0 
 

Assignment Operators: 
= (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) 
Example: 
let x = 10; 
x += 5; // x = x + 5; x is now 15 
x -= 3; // x = x - 3; x is now 12 
x *= 2; // x = x * 2; x is now 24 
x /= 4; // x = x / 4; x is now 6  
   

Comparison Operators: 
== (equal to), === (strict equal to), != (not equal to), !== (strict not equal to), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to) 
Example: 
let x = 10; 
let y = 5; 
let isEqual = (x == y); // false 
let isStrictEqual = (x === y); // false 
let isNotEqual = (x != y); // true 
let isStrictNotEqual = (x !== y); // true 
let isGreater = (x > y); // true 
let isLess = (x < y); // false 
let isGreaterOrEqual = (x >= y); // true 
let isLessOrEqual = (x <= y); // false 
 

Examples: 
Code Examples Demonstrating Variable Declaration and Basic Operations: 

Variable Declaration: 
var name = "Alice"; 
let age = 25; 
const isStudent = true; 
 
console.log(name); // Output: Alice 
console.log(age); // Output: 25 
console.log(isStudent); // Output: true 
   

Arithmetic Operations: 
let x = 10; 
let y = 5; 
let sum = x + y; 
let difference = x - y; 
let product = x * y; 
let quotient = x / y; 
let remainder = x % y; 
 
console.log(sum); // Output: 15 
console.log(difference); // Output: 5 
console.log(product); // Output: 50 
console.log(quotient); // Output: 2 
console.log(remainder); // Output: 0 
 

Assignment Operations: 
let x = 10; 
x += 5; 
x -= 3; 
x *= 2; 
x /= 4; 
 
console.log(x); // Output: 6 
 

Comparison Operations: 
let x = 10; 
let y = 5; 
let isEqual = (x == y); 
let isStrictEqual = (x === y); 
let isNotEqual = (x != y); 
let isStrictNotEqual = (x !== y); 
let isGreater = (x > y); 
let isLess = (x < y); 
let isGreaterOrEqual = (x >= y); 
let isLessOrEqual = (x <= y); 
 
console.log(isEqual); // Output: false 
console.log(isStrictEqual); // Output: false 
console.log(isNotEqual); // Output: true 
console.log(isStrictNotEqual); // Output: true 
console.log(isGreater); // Output: true 
console.log(isLess); // Output: false 
console.log(isGreaterOrEqual); // Output: true 
console.log(isLessOrEqual); // Output: false 
 

Hands-On Activity: 
Objective: Reinforce understanding of variable declaration and basic operators in JavaScript. 

Instructions: 
Variable Declaration: 
Declare variables using var, let, and const. 
Assign values to these variables and print them to the console. 
Example: 
var name = "Alice"; 
let age = 25; 
const isStudent = true; 
 
console.log(name); // Output: Alice 
console.log(age); // Output: 25 
console.log(isStudent); // Output: true 
 

Arithmetic Operations: 
Perform arithmetic operations using variables and print the results to the console. 
Example: 
JavaScript 

let x = 10; 
let y = 5; 
let sum = x + y; 
let difference = x - y; 
let product = x * y; 
let quotient = x / y; 
let remainder = x % y; 
 
console.log(sum); // Output: 15 
console.log(difference); // Output: 5 
console.log(product); // Output: 50 
console.log(quotient); // Output: 2 
console.log(remainder); // Output: 0 
 

Assignment Operations: 
Use assignment operators to modify variable values and print the results to the console. 
Example: 
let x = 10; 
x += 5; 
x -= 3; 
x *= 2; 
x /= 4; 
 
console.log(x); // Output: 6
   

Comparison Operations: 
Use comparison operators to compare variable values and print the results to the console. 
Example: 
let x = 10; 
let y = 5; 
let isEqual = (x == y); 
let isStrictEqual = (x === y); 
let isNotEqual = (x != y); 
let isStrictNotEqual = (x !== y); 
let isGreater = (x > y); 
let isLess = (x < y); 
let isGreaterOrEqual = (x >= y); 
let isLessOrEqual = (x <= y); 
 
console.log(isEqual); // Output: false 
console.log(isStrictEqual); // Output: false 
console.log(isNotEqual); // Output: true 
console.log(isStrictNotEqual); // Output: true 
console.log(isGreater); // Output: true 
console.log(isLess); // Output: false 
console.log(isGreaterOrEqual); // Output: true 
console.log(isLessOrEqual); // Output: false   
