const Utilities = require('./utilities');

class QuickSort {
    constructor() {
        this.count = 0;
    }

    sort(fileName) {
        let arrFile = Utilities.transformFileInArray(data);
        let pivot = arrFile[r];
        for (j in) {
            if (arrFile[i] < pivot) {
                i += 1;
            }
        }
        console.log('TRI RAPIDE : ', arrFile);
        console.log('Nombre de comparaisons : ', this.count, '\n\n');
        return arrFile;
    }
}

module.exports = QuickSort;