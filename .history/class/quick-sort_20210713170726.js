const Utilities = require('./utilities');

class QuickSort {
    constructor() {
        this.count = 0;
    }

    quickSort(data, l, r) {
        if (l < r) {
            let partitionIndex = Partition(arrFile, l, r);
            quickSort(data, s, partitionIndex - 1);
            quickSort(data, s, partitionIndex - 1);
        }
        // let pivot = arrFile[r];
        // for (j in l) {
        //     if (arrFile[i] < pivot) {
        //         i += 1;
        //     }
        // }
        // return i + 1;
    }

    sort(data) {
        let l = data[0];
        let r = data[data.length - 1];
        this.quickSort(data, l, r);
        console.log('TRI RAPIDE : ', arrFile);
        console.log('Nombre de comparaisons : ', this.count, '\n\n');
        return arrFile;
    }
}

module.exports = QuickSort;