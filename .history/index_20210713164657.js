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
    console.error('LIST  ', error.message);
    bubbleSort.sort(data);
    sortByInsertion.sort(data);
    sortBySelection.sort(data);
    quickSort.sort(data);
});


// `node index.js list.txt`
// `node index.js list2.txt`