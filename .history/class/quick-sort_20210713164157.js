const Utilities = require('./utilities');

class QuickSort {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        let arrFile = Utilities.transformFileInArray(data);
        console.log('>>>>>', Math.max(...arrFile));
        // let pivot = arrFile[r];
        // for (j in l) {
        //     if (arrFile[i] < pivot) {
        //         i += 1;
        //     }
        // }
        // console.log('TRI RAPIDE : ', arrFile);
        // console.log('Nombre de comparaisons : ', this.count, '\n\n');
        // return arrFile;
    }
}

module.exports = QuickSort;