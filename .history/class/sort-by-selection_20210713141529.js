const Utilities = require('./utilities');

class SortBySelection {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        let arrFile = Utilities.transformFileInArray(data);
        for (let i = 0; i < arrFile.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < arrFile.length; j++) {
                if (arrFile[i] < arrFile[min]) {
                    min = j;
                }
            }
            if (min != i) {
                //swap(arrFile[i], arrFile[min]);
            }
        }
        console.log('TRI PAR INSERTION : ', arrFile);
        console.log('Nombre de comparaisons : ', this.count, '\n\n');
        return arrFile;
    }
}

module.exports = SortBySelection;