// Try-Catch Block

const fs = require('fs');

function errorHandling() {
  try {
    const fileData = fs.readFileSync('data.json');
  } catch (error) {
    console.log(error.message);
  }

  console.log('Executed Successfully!');
}

errorHandling();
