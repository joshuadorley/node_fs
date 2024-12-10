// readFile.js
const fs = require('fs');

// Using fs.readFile() to read the file content
fs.readFile('HelloWorld.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File Content:', data); // Output the content of HelloWorld.txt
});