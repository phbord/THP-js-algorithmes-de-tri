class SortByInsertion {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        console.log('>>>', data);
        let arrFile = data.split(' ').map(x => +x);
        for (let i = 0; i < arrFile.length; i++) {
            let current = data[i];
            let j = i - 1;
            while (j >= 0 && arrFile[j] > current) {
                arrFile[j + 1] = arrFile[j];
                j--;
                this.count += 1;
            }
            arrFile[j + 1] = current;
        }
        console.log('TRI PAR INSERTION : ', arrFile);
        console.log('Nombre de comparaisons : ', this.count, '\n\n');
        return arrFile;
    }
}

module.exports = SortByInsertion;