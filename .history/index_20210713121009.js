const fs = require('fs');
const fileName = process.argv[2];
const data = fs.readFileSync(fileName, 'utf8');
const BubbleSort = require('./class/bubble-sort');
const SortByInsertion = require ('./class/sort-by-insertion');
const SortBySelection = require ('./class/sort-by-selection');
const QuickSort = require('./class/quick-sort');

const bubbleSort = new BubbleSort();

// Méthode Asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (!fileName) console.log ('Fichier non exitant.');
    if (error) {
        console.error('error ====> ', error.message);
        return;
    }
    bubbleSort.sort(data);
    console.log('1. data ====> ', data);
});


// `node index.js list.txt`
// `node index.js list2.txt`