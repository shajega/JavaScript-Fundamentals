// JSON Syntax
let jsonString0 = '{"name": "John","age": 25,"address": {"city": "New York", "street": "5th Avenue"},"skills": ["JavaScript", "HTML", "CSS"]}';


// Parsing JSON
let jsonString = '{"name":"John","age":25}';
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // Output: John

// Stringifying Objects
let obj = {
    name: "John",
    age: 25
};
let jsonString1 = JSON.stringify(obj);
console.log(jsonString1); // Output: {"name":"John","age":25}


//Working with Nested JSON Data
// {
//     "name": "John",
//     "address": {
//         "city": "New York",
//         "street": "5th Avenue"
//     },
//     "skills": ["JavaScript", "HTML", "CSS"]
// }


let jsonString3 = '{"name":"John","address":{"city":"New York","street":"5th Avenue"},"skills":["JavaScript","HTML","CSS"]}';
let jsonObj3 = JSON.parse(jsonString3);
console.log(jsonObj3.address.city); // Output: New York
console.log(jsonObj3.skills[0]); // Output: JavaScript

// Accessing Nested Data
let jsonString4 = '{"name":"John","address":{"city":"New York","street":"5th Avenue"},"skills":["JavaScript","HTML","CSS"]}';
let jsonObj4 = JSON.parse(jsonString);

// Accessing nested object properties
console.log(jsonObj4.address.city); // Output: New York
console.log(jsonObj4.address.street); // Output: 5th Avenue

// Accessing elements in a nested array
console.log(jsonObj4.skills[0]); // Output: JavaScript
console.log(jsonObj4.skills[1]); // Output: HTML
console.log(jsonObj4.skills[2]); // Output: CSS

// Modifying nested object properties
jsonObj.address.city = "San Francisco";
console.log(jsonObj.address.city); // Output: San Francisco

// Modifying elements in a nested array
jsonObj.skills[1] = "React";
console.log(jsonObj.skills); // Output: ["JavaScript", "React", "CSS"]

// Adding Nested Data
// Adding a new property to a nested object
jsonObj.address.zipCode = "10001";
console.log(jsonObj.address.zipCode); // Output: 10001

// Adding a new element to a nested array
jsonObj.skills.push("Node.js");
console.log(jsonObj.skills); // Output: ["JavaScript", "React", "CSS", "Node.js"]
