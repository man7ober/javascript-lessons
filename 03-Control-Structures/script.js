/**
 * Comparison Operator
 * === Strict Equality
 * >=  Greater than Equal
 * <=  Less than Equal
 * <   Less than
 * >   Greater than
 * !   Not
 * !== Not Equal
 */

/**
 * Logical Operator
 * && And [1 false = All false]
 * || Or  [1 true = All true]
 */

/**
 * Falsy Values
 * 0, '', false, null, NaN, undefined
 */

// If-Else Statement

const votingAge = 18;

if (votingAge >= 18) {
  console.log(`You're eligible to vote!`);
} else {
  console.log(`You're not eligible to vote!`);
}

// For Loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For-of Loop

let users = ['Max', 'Anna', 'Joe'];

for (let user of users) {
  console.log(user);
}

// For-in Loop

let loggedInUser = {
  name: 'Max',
  age: 32,
  isAdmin: true,
};

for (let key in loggedInUser) {
  console.log(`${key}: ${loggedInUser[key]}`);
}

// While Loop

let num = 0;

while (num < 10) {
  num++;

  if (num === 5) continue;

  if (num === 8) break;

  console.log(num);
}
