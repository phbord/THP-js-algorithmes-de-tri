const fs = require('fs');
const fileName = process.argv[2];
const bubbleSort = require('./class/bubble-sort');

con

// Méthode Asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error('error ====> ', error.message);
        return;
    }
    console.log('1. data ====> ', data);
});
