// createFile.js
const fs = require('fs');

// Using fs.writeFile() to create a file and write content
fs.writeFile('HelloWorld.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File has been created with content "Hello, World!"');
});
