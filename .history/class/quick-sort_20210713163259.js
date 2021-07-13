const Utilities = require('./utilities');

class QuickSort {
    constructor() {
        this.count = 0;
    }

    sort(fileName) {
        let arrFile = Utilities.transformFileInArray(data);
        pivot = arrFile[r];
        for (let i = 0; i < arrFile.length - 1; i++) {
            if arrFile[i] {
                i += 1;
            }
        }
        console.log('TRI RAPIDE : ', arrFile);
        console.log('Nombre de comparaisons : ', this.count, '\n\n');
        return arrFile;
    }
}

module.exports = QuickSort;