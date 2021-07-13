class BubbleSort {
    constructor() {}
    //un fichier qui n'existe pas, vide, un mot au lieu d'un nombre

    sort(data) {
        if (data.length > 0) console.log
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
        let isNumber = (c) => typeof c !== 'number' || c == NaN ? true : false;
        console.log(arrFile,'>>> ', arrFile.every(isNumber));
        //console.log(arrFile[4]);

        console.log('Tri à bulle: 15 comparaisons : ', arrFile);
        return arrFile;
    }
}

module.exports = BubbleSort;