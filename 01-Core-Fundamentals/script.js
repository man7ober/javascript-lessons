/* Data Types */

// String
let userName = 'Mayank';

// String Property
userName.length;

// String Method
userName.toUpperCase();
userName.toLowerCase();

// Number
let age = 24;

// Boolean
let isGraduated = true;

// Array
let programming = ['JavaScript', 'Python', 'Golang'];

// Object
let address = {
  building: 'E-201, Shanti Lifespaces 1',
  landmark: 'Near D-Mart',
  city: 'Mumbai',
  pinCode: 401208,
};

/*  Functions */

// Function Declaration
function calculate(num1, num2) {
  let add = num1 + num2;

  let sub = num1 - num2;

  let mul = num1 * num2;

  let div = num1 / num2;

  return { add, sub, mul, div };
}

// Function Calling
calculate(3, 2);

// Object Method
let person = {
  name: 'Max', // Property
  greet() {
    // Method
    console.log('Hello!');
  },
};

person.greet();
