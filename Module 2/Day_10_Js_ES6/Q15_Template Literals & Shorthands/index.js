
// a) Create a variable username and course and print:
const username = "Rama";
const course = "JavaScript"
console.log(`Hello ${username}, welcome to ${course} course!`);



// b) Convert the below object into shorthand syntax:
const name = "Sam";
const age = 21;
const student = {
  name: name,
  age: age,
  greet: function () {
    console.log("Hello");
  }
};


const name = "Sam";
const age = 21;

const student = {
    name,
    age,
    greet () {
        console.log("Hello");
    }
};


// c) Create a function getFullName(first, last) using arrow function shorthand (no return keyword).

const getFullName = (first, last) => `${first} ${last}`;

