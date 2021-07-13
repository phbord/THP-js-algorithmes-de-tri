const Utilities = require('./utilities');

class SortBySelection {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        for (let i = 0; i < data.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < data.length; j++) {
                if (data[j] < data[min]) {
                    min = j;
                    this.count += 1;
                }
            }
            if (min != i) {
                let temp = data[i];
                data[i] = data[min];
                data[min] = temp;
            }
        }
        console.log('TRI PAR SELECTION : ', data);
        console.log('Nombre de comparaisons : ', this.count, '\n\n');
        return data;
    }
}

module.exports = SortBySelection;