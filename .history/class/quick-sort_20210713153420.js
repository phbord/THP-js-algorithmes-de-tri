const Utilities = require('./utilities');

class QuickSort {
    constructor() {
        this.count = 0;
    }

    sort(fileName) {
        let arrFile = Utilities.transformFileInArray(data);
        console.log('TRI PAR SELECTION : ', arrFile);
        console.log('Nombre de comparaisons : ', this.count, '\n\n');
        return arrFile;
    }
}

module.exports = QuickSort;