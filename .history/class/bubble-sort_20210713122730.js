class BubbleSort {
    constructor() {}

    sort(data) {
        let arrFile = data.split(' ').map(x => +x);

        let isNumber = (c) => typeof c == 'NaN' || c !== 'number';
        console.log(arrFile,'>>> ', arrFile.every(isNumber));
        //console.log(arrFile[4]);

        for (let i = 0; i < arrFile.length; i++) {
            for (let j = 0; j < arrFile.length; j++) {
                if (arrFile[j] < arrFile[j - 1]) {
                    let temp = arrFile[j];
                    arrFile[j] = arrFile[j - 1];
                    arrFile[j - 1] = temp;
                }
            }
        }

        console.log('Tri à bulle: 15 comparaisons : ', arrFile);
        return arrFile;
    }
}

module.exports = BubbleSort;