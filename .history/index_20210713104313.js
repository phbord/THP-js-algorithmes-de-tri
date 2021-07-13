const fs = require('fs');
const fileName = process.argv[2];
const BubbleSort = require('./class/bubble-sort');
const = require ('./class/sort-by-insertion');
const = require ('./class/sort-by-selection');
const QuickSort = require('./class/quick-sort');

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
