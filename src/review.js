// primitive vs non-primitive

let n1 = 1;
let n2 = 1;

// console.log(n1 == n2); // true
// console.log(n1 === n2); // true

let obj1 = { name: 'jack' };
let obj2 = { name: 'jack' };

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
