class BubbleSort {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        let arrFile = data.split(' ').map(x => +x);
        for (let i = 0; i < arrFile.length; i++) {
            for (let j = 0; j < arrFile.length; j++) {
                if (arrFile[j] < arrFile[j - 1]) {
                    this.swap(arrFile, j);
                    this.count += 1;
                }
            }
        }
        console.log('TRI A BULLE: 15 comparaisons : ', arrFile);
        console.log('Nombre de comparaisons : ', this.count, '\n\n'); 15
        return arrFile;
    }

    swap(data, n) {
        let temp = data[n];
        data[n] = data[n - 1];
        data[n - 1] = temp;
    }
}

module.exports = BubbleSort;