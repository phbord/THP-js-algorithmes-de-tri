const Utilities = require('./utilities');

class QuickSort {
    constructor() {
        this.count = 0;
    }

    quickSort(data) {
        let l = arrFile[0];
        let r = arrFile[arrFile.length - 1];
        console.log('>>>>>', r);
        let pivot = arrFile[r];
        for (j in l) {
            if (arrFile[i] < pivot) {
                i += 1;
            }
        }
    }

    sort(data) {
        let arrFile = Utilities.transformFileInArray(data);
        // console.log('TRI RAPIDE : ', arrFile);
        // console.log('Nombre de comparaisons : ', this.count, '\n\n');
        // return arrFile;
    }
}

module.exports = QuickSort;