// Default Parameter

function greetUser(user = 'User') {
  console.log(`Hi, ${user}!`);
}

greetUser('Max'), greetUser();

// Rest & Spread Operator

function addNumbers(...numbers) {
  // Rest
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbers = [1, 2, 3, 4];

console.log(addNumbers(...inputNumbers)); // Spread

// Map Method

const array1 = [1, 4, 9, 16];

const mapArray = array1.map((x) => x * 2);

console.log(mapArray);

// Filter Method

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const filterArray = words.filter((word) => word.length > 6);

console.log(filterArray);

// Reduce Method

const array2 = [1, 2, 3, 4];

const reduceArray = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(reduceArray);
