// deleteFile.js
const fs = require('fs');

// Using fs.unlink() to delete the file
fs.unlink('HelloWorld.txt', (err) => {
    if (err) throw err;
    console.log('File has been deleted');
});