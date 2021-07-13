const Utilities = require('./utilities');

class BubbleSort {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (data[j] < data[j - 1]) {
                    this.swap(data, j);
                    this.count += 1;
                }
            }
        }
        console.log('TRI A BULLE : ', data);
        console.log('Nombre de comparaisons : ', this.count, '\n\n'); //expect 15
        return data;
    }

    swap(data, n) {
        let temp = data[n];
        data[n] = data[n - 1];
        data[n - 1] = temp;
    }
}

module.exports = BubbleSort;