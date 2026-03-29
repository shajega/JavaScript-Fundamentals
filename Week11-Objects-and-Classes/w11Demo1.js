let person = {
    name: "Alice",
    age: 29,
    job: "Software Engineer",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Accessing Object Properties - Dot Notation
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 29

// Accessing Object Properties - Bracket Notation
console.log(person["name"]); // Output: Alice
console.log(person["age"]); // Output: 29

// Adding a Property
person.email = "alice@example.com";
console.log(person.email); // Output: alice@example.com

// Updating a Property
person.age = 30;
console.log(person.age); // Output: 30

// Deleting a Property
delete person.job;
console.log(person.job); // Output: undefined


// Nested Objects
let employee = {
    name: "Alice",
    age: 29,
    address: {
        city: "Chicago",
        street: "1060 W Addison St"
    }
};

console.log(employee.address.city); // Output: Chicago
console.log(employee.address.street); // Output: 1060 W Addison St

// Methods in Objects

let employee2 = {
    name: "Alice",
    age: 29,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

employee2.greet();


// Object Constructors
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}

let person1 = new Person("Alice", 29, "Software Engineer");
let person2 = new Person("Bob", 35, "Designer");

person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob

