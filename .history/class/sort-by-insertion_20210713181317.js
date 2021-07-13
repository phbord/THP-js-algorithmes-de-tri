const Utilities = require('./utilities');

class SortByInsertion {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        for (let i = 1; i < data.length; i++) {
            let current = data[i];
            let j = i - 1;
            while (j >= 0 && data[j] > current) {
                data[j + 1] = data[j];
                j--;
                this.count += 1;
            }
            data[j + 1] = current;
        }
        console.log('TRI PAR INSERTION : ', data);
        console.log('Nombre de comparaisons : ', this.count, '\n\n');
        return data;
    }
}

module.exports = SortByInsertion;