if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);

// 20
// ReferenceError: x is not defined
// var has function scope, NOT block scope.
// So y is accessible outside the if block, so console.log(y) prints 20.

// let has block scope.
// x exists only inside the if block, so when you try to access it outside, JavaScript throws:




