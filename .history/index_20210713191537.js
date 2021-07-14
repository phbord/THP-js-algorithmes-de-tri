const fs = require('fs');
const fileName = process.argv[2];
const BubbleSort = require('./class/bubble-sort');
const SortByInsertion = require ('./class/sort-by-insertion');
const SortBySelection = require ('./class/sort-by-selection');
const QuickSort = require('./class/quick-sort');

if (!fs.existsSync(fileName)) {
    console.log ('Fichier non exitant.');
    return;
}

const data = fs.readFileSync(fileName, 'utf8');
const utilities = require('./class/utilities');
const bubbleSort = new BubbleSort();
const sortByInsertion = new SortByInsertion();
const sortBySelection = new SortBySelection();
const quickSort = new QuickSort();


if (data.length === 0) {
    console.log ('Fichier vide.');
    return;
}

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error('error ====> ', error.message);
        return;
    }
    console.error('DATA de',fileName, ' ====> ', data, '\n\n');
    let arrFile = utilities.transformFileInArray(data);
    bubbleSort.sort(arrFile);
    sortByInsertion.sort(arrFile);
    sortBySelection.sort(arrFile);
    quickSort.sort(arrFile);
});


// COMMANDES :
// - `node index.js list.txt`
// - `node index.js list2.txt`