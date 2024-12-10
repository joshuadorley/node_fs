// updateFile.js
const fs = require('fs');

// Using fs.appendFile() to append text to the file
fs.appendFile('HelloWorld.txt', '\nAppended Text: This is Node.js!', (err) => {
    if (err) throw err;
    console.log('Text has been appended to the file');
});
