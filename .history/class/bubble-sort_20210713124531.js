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
        console.log('Tri à bulle: 15 comparaisons : ', arrFile);
        console.log('Nombre de comparaisons : ', this.count, '\n\n');
        return arrFile;
    }

    swap(data, n) {
        let temp = arrFile[n];
        arrFile[n] = arrFile[n - 1];
        arrFile[n - 1] = temp;
    }
}

module.exports = BubbleSort;