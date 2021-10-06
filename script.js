'use strict';
const Person = function (firstName, birthYear) {
  // console.log(this);
  // Instance property
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never create functio in constructor function
  // this.calcAge = function () {
  //   console.log(205 - this.birthYear);
  // };
};
const henry = new Person('henry', 1991);
console.log(henry);
// With NEW keyword
//1.New object{} is created
//2.function is called, this(key)={} points to the new created object
//3.{} newly creted object linked to prototype
//4.function automaticaly returns {}

const john = new Person('john', 2000);
const mathew = new Person('mathew', 2010);
console.log(john, mathew);

console.log(john instanceof Person); // to check it is created from the same constructor function

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2050 - this.birthYear);
};
john.calcAge();
mathew.calcAge();

console.log(henry.__proto__);
console.log(henry.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(henry));

// we can assign properties to object
Person.prototype.species = 'Homo sapience';
console.log(henry);
// to check  if a object has its own property
console.log(henry.hasOwnProperty('species')); // False

console.log(henry.__proto__.__proto__);
console.log(henry.__proto__.__proto__.__proto__);
