class BubbleSort {
    constructor() {}

    sort(data) {
        let arrFile = data.split(' ').map(x => +x);
        for (let i = 0; i < arrFile.length; i++) {
            for (let j = 0; j < arrFile.length; j++) {
                if (arrFile[j] < arrFile[j - 1]) {
                    let temp = arrFile[j];
                    arrFile[j] = arrFile[j - 1];
                    arrFile[j - 1] = temp;
                }
            }
        }
        //let isNumber = (c) => typeof c == NaN;
        //console.log(arrFile,'>>> ', arrFile.every(isNumber));
        console.log(arrFile,'+++++++++');
    }
}

module.exports = BubbleSort;