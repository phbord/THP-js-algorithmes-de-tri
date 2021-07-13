const fs = require('fs');
const fileName = process.argv[2];
require('./class/bubble-sort');

const bubbleSort = new BubbleSort();

// Méthode Asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error('error ====> ', error.message);
        return;
    }
    bubbleSort.sort(fileName);
    console.log('1. data ====> ', data);
});
