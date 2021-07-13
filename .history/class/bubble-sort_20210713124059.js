class BubbleSort {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        let arrFile = data.split(' ').map(x => +x);
        for (let i = 0; i < arrFile.length; i++) {
            for (let j = 0; j < arrFile.length; j++) {
                if (arrFile[j] < arrFile[j - 1]) {
                    let temp = arrFile[j];
                    arrFile[j] = arrFile[j - 1];
                    arrFile[j - 1] = temp;
                    this.count += 1;
                }
            }
        }
        console.log('Tri à bulle: 15 comparaisons : ', arrFile);
        console.log('Nombre de comparaisons : ', this.count,);
        return arrFile;
    }
}

module.exports = BubbleSort;