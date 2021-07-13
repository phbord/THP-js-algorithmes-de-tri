const fs = require('fs');
const fileName = process.argv[2];
const BubbleSort = require('./class/bubble-sort');
const SortByInsertion = require ('./class/sort-by-insertion');
const SortBySelection = require ('./class/sort-by-selection');
const QuickSort = require('./class/quick-sort');

if (!fs.existsSync(fileName)) console.log ('Fichier non exitant.');
try {
    if (fs.existsSync(fileName)) {}
} catch(err) {
    console.log ('Fichier non exitant.');
}

const data = fs.readFileSync(fileName, 'utf8');
const bubbleSort = new BubbleSort();


fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error('error ====> ', error.message);
        return;
    }
    bubbleSort.sort(data);
    console.log('1. data ====> ', data);
});


// `node index.js list.txt`
// `node index.js list2.txt`