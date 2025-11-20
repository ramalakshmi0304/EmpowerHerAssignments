// 1. Template Literals + Expressions

console.log(`5+7=${5 + 7}`)

const message = `
This is line 1
This is line 2
This is line 3
`;

console.log(message);

const firstName = "John";
const lastName = "Doe";

console.log(`Full Name:${firstName} ${lastName}`);


// 2. Arrow Functions & this

// a)
const square = n => n * n;
// b)
const obj = {
    value: 50,
    test: () => console.log(this.value)
};
obj.test();

// this inside an arrow function does NOT refer to obj.
// It refers to the outer (global) scope, not the object.

// So the output will be: undefined
// Because this.value in the global scope is undefined.

//c
const obj = {
    value: 50,
    test() {
        console.log(this.value);
    }
};
obj.test();

// 3. Rest, Spread & Copying Objects


const product = { name: "Pen", price: 10 };

const copy = { ...product };
console.log(copy);

// b) Merge these two objects using spread:


const a = { x: 1 };
const b = { y: 2 };

const mergedobj = { ...a, ...b };
console.log(mergedobj)

// c) Write a function maxValue(...nums) (rest operator) that returns the largest number.

function maxValue(...nums) {
    return Math.max(...nums);
}

console.log(maxValue(7, 9, 6, 11))

// 4. Destructuring & Optional Chaining

// a) Destructure to extract a and b:

const arr = [10, 20, 30];

const [a, b] = arr;
console.log(a)
console.log(b)

// b) Destructure the object to extract brand:

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c) Safely access the following using optional chaining:

const info = {};
// Expected output: undefined (not an error)

console.log(info.name)


// 5. Scoping (let/var/const)
// a) What will this print?

for (var i = 0; i < 3; i++) { }
console.log(i);

// It becomes a global variable (or function-scoped if inside a function).

// The loop runs like this:

// i = 0

// i = 1

// i = 2

// Loop stops when i becomes 3

// So after the loop:

// console.log(i); // 3



// b)
for (let j = 0; j < 3; j++) { }
console.log(j);

// output: ReferenceError: j is not defined
// let has block scope, meaning the variable exists only inside the block { } where it is created.


// c) Why is const used for values that should not be reassigned ?
// const stands for constant, meaning the variable cannot be reassigned to a new value.Because const prevents reassignment.If a value should
//  stay the same throughout the program (like configuration values, fixed numbers, or references that shouldn’t change), we use const

//6a) Convert this to a ternary:

let speed;
if (kmph > 60) {
  speed = "Fast";
} else {
  speed = "Normal";
}
let speed=kmph>60? "Fast":"Normal";


// b) Write a ternary that prints "Adult" if age ≥ 18, else "Minor".

const result = age >=18 ? "Adult" : "Minor";
console.log(result);


// c) Write a ternary to check: Positive → "Positive" Zero → "Zero" Negative → "Negative" (Hint: use nested ternary)

const result =num>0
? "Positive"
:num==0
? "Zero"
:"Negative";
console.log(result);

// 7. Spread, Rest & Arrays

// a) Add elements 4, 5 to this array using spread:

const nums = [1,2,3];
const  newNums=[...nums,4,5]

console.log(newNums);

// b) Combine these arrays using spread:

const a = ["x","y"];
const b = ["z"];

let result=[...a,...b];
console.log(result);

// c) Write a function using rest:

// printNames("A","B","C") → returns ["A","B","C"].

function printNames(...names){

    return names;

}
console.log(printNames("A","B","C"))

// 8. Object Destructuring & Shorthand
// a) Destructure the following:

const user = { id: 101, status: "active" };

const {id,status}=user;

console.log(id,status)


// b) Convert this to shorthand:

const id = 101;
const role = "admin";
const user = {
  id: id,
  role: role
};
// ans

const id = 101;
const role = "admin";
const user = {
   id,
   role
};
// Because when property name = variable name, you can write only the name once.


// c) Create an object using shorthand and add a method using shorthand syntax.

const name="John";
const age="25";

const person={
    name,
    age,
    greet(){
        console.log(`Hello, I am${name}')
    }
};
person.greet();


//  9. Template Literals (More Practice)
//  a) Use a template literal to print today’s date using: new Date().toDateString(


console.log(`Today's date is: ${new Date().toDateString()}`);


//  b) Create a template literal that prints: "Hello NAME, your score is SCORE/100"

const name="Dev";
const score=92;

console.log(`Hello${name}, your score is ${score}/100`);

// 10. Arrow Function Shorthands
// a) Convert a normal function to a one-line arrow function for addition.

// b) Write an arrow function isAdult(age) that returns true/false.

// c) Create an arrow function double that doubles a number.


function add(a, b) {
  return a + b;
}

// arrow function
const add=(a,b)=> a+b;

const Isadult= (age)=> age>=18;

const double = (num) => num *2;


// 11. Spread Operator (Arrays & Objects)
// a) Clone an array using spread.

// b) Add element 100 to the beginning of an array using spread.

// c) Merge two objects and override one property using spread.

//a//
const arr=[1,2,3]
const copy=[...arr]
console.log(copy)
//b//
const n=[1,2,3];
const newarr=[100, ...n]
console.log(newarr);

//c//
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 99, c: 3 };
const merged = { ...obj1, ...obj2 };
console.log(merged);


// 12. Optional Chaining (More Practice)
// a) Access user.address.city safely:

const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user?.address?.city);


// b) Access user.job.title safely (should print undefined).

console.log(user?.job?.title);


// c) Write an example where optional chaining prevents a runtime error.

const info = null;
console.log(info.details.name);  
// Error: Cannot read properties of null


const info = null;
console.log(info?.details?.name);  
// undefined (no error)