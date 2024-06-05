// Class

class Job {
  constructor(title, location, salary) {
    this.title = title;
    this.location = location;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
    );
  }
}

// Object
const developer = new Job('Developer', 'New York', 50000);
const architect = new Job('Architect', 'Ireland', 98000);

developer.describe();
architect.describe();

// Array Destructuring

let name = ['John', 'Wick'];

const [firstName, lastName] = name;

console.log(`My name is ${firstName} ${lastName}.`);

// Object Destructuring

let job = { title: 'Developer', location: 'Munich' };

const { title, location } = job;

console.log(`Hi, I am a ${title} and I'm working in ${location}`);
