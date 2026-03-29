// Adding Methods to Objects
let person = {
    name: "Jane",
    age: 28,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Output: Hello, my name is Jane

// The 'this' Keyword
let person = {
    name: "Jane",
    age: 28,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },
    haveBirthday: function() {
        this.age += 1;
        console.log(`Happy Birthday! You are now ${this.age} years old.`);
    }
};

person.haveBirthday(); // Output: Happy Birthday! You are now 29 years old.


// Common Object Methods
// 'Object.keys()'

let person = {
    name: "Jane",
    age: 28,
    job: "Software Engineer"
};

console.log(Object.keys(person)); // Output: ["name", "age", "job"]

// 'Object.values()'
console.log(Object.values(person)); // Output: ["Jane", 28, "Software Engineer"]


// 'Object.entries()'
console.log(Object.entries(person)); // Output: [["name", "Jane"], ["age", 28], ["job", "Software Engineer"]]
