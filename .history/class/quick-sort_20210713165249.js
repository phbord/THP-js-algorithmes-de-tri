const Utilities = require('./utilities');

class QuickSort {
    constructor() {
        this.count = 0;
    }

    quickSort(data) {

    }

    sort(data) {
        let arrFile = Utilities.transformFileInArray(data);
        // console.log('TRI RAPIDE : ', arrFile);
        // console.log('Nombre de comparaisons : ', this.count, '\n\n');
        // return arrFile;
    }
}

module.exports = QuickSort;