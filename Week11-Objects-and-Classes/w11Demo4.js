// Using the Spread Operator with Arrays

// Combining Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// Copying Arrays
let originalArr = [1, 2, 3];
let copiedArr = [...originalArr];
console.log(copiedArr); // Output: [1, 2, 3]

// Using Spread Operator with Function Arguments
function sum(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];
let result = sum(...numbers);
console.log(result); // Output: 6

// Using the Spread Operator with Objects

// Combining Objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Copying Objects
let originalObj = { a: 1, b: 2 };
let copiedObj = { ...originalObj };
console.log(copiedObj); // Output: { a: 1, b: 2 }

// Modifying Properties in Copied Objects
let originalObj = { a: 1, b: 2, c: 3 };
let modifiedObj = { ...originalObj, b: 5, d: 4 };
console.log(modifiedObj); // Output: { a: 1, b: 5, c: 3, d: 4 }





