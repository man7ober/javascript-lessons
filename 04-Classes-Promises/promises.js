// Promises

const fs = require('fs/promises');

const promises = async () => {
  try {
    let data = await fs.readFile('file.txt');
    console.log(data.toString());
  } catch (error) {
    console.log(error.message.split(',')[0]);
  }
};

promises();
