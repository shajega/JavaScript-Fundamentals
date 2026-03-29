// Destructuring Arrays

let numbers = [1, 2, 3, 4];
let [first, second, third] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3

// Skipping Elements
let [first1, , third1] = numbers;
console.log(first1); // Output: 1
console.log(third1); // Output: 3

// Destructuring Objects
let person = {
    firstname: "Jane",
    age: 28,
    city: "San Francisco"
};

let { firstname, age, city } = person;
console.log(firstname); // Output: Jane
console.log(age); // Output: 28
console.log(city); // Output: San Francisco

// Renaming Variables
let { firstname: personName, age: personAge, city: personCity } = person;
console.log(personName); // Output: Jane
console.log(personAge); // Output: 28
console.log(personCity); // Output: San Francisco

//Default Values
let { name1, age1, city1, phone1 = "Unknown" } = person;
console.log(phone1); // Output: Unknown

//Nested Object Destructuring:

let person1 = {
    name: "Jane",
    address: {
        city: "San Francisco",
        street: "Market Street"
    }
};

let { name2, address2: { city2, street2 } } = person1;
console.log(city2); // Output: San Francisco
console.log(street2); // Output: Market Street

