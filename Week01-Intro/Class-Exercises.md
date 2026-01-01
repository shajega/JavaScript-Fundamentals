# JavaScript Practice Exercises

---

## Exercise 1: Variable Declaration

1. Declare a variable `name` using `var`, assign it a value, then change its value.  
   Print both values to the console.
2. Declare a variable `age` using `let`, assign it a value, update it, and print the updated value.
3. Declare a constant `isStudent` using `const` and try reassigning it to a new value.  
   Observe the error in the console.

**Example:**
```javascript
var name = "Alice";
console.log(name); // Output: Alice

name = "Bob";
console.log(name); // Output: Bob

let age = 20;
age = 21;
console.log(age); // Output: 21

const isStudent = true;
// isStudent = false; // Uncommenting this line will cause an error
````

---

## Exercise 2: Arithmetic Operations

1. Create two variables `x` and `y` with values `15` and `5`, respectively.
2. Perform the following arithmetic operations:

   * Addition
   * Subtraction
   * Multiplication
   * Division
   * Modulus
3. Print the results to the console.

**Example:**

```javascript
let x = 15;
let y = 5;

console.log(x + y); // Addition: 20
console.log(x - y); // Subtraction: 10
console.log(x * y); // Multiplication: 75
console.log(x / y); // Division: 3
console.log(x % y); // Modulus: 0
```

---

## Exercise 3: Assignment Operations

1. Declare a variable `z` with the value `20`.
2. Use the following assignment operators to modify `z` and print the results:

   * `+=`
   * `-=`
   * `*=`
   * `/=`

**Example:**

```javascript
let z = 20;

z += 5;
console.log(z); // 25

z -= 10;
console.log(z); // 15

z *= 2;
console.log(z); // 30

z /= 3;
console.log(z); // 10
```

---

## Exercise 4: Comparison Operations

1. Create two variables `a` and `b` with values `10` and `5`.
2. Use comparison operators to compare the two variables:

   * `==`
   * `===`
   * `!=`
   * `!==`
   * `>`
   * `<`
   * `>=`
   * `<=`
3. Print the results to the console.

**Example:**

```javascript
let a = 10;
let b = 5;

console.log(a == b);   // false
console.log(a === b);  // false
console.log(a != b);   // true
console.log(a !== b);  // true
console.log(a > b);    // true
console.log(a < b);    // false
console.log(a >= b);   // true
console.log(a <= b);   // false
```

---

## Exercise 5: Combined Practice

Write a JavaScript program that:

1. Declares a variable `score` with an initial value of `50` using `let`.
2. Increases the score by `10` using the `+=` operator.
3. Subtracts `5` from `score` using the `-=` operator.
4. Checks if `score` is greater than or equal to `50` using the `>=` operator.
5. Prints the result to the console.

**Example:**

```javascript
let score = 50;

score += 10;
score -= 5;

console.log(score >= 50); // Output: true
```

```
```
