class BubbleSort {
    constructor() {}

    sort(data) {
        let arrFile = data.split(' ').map(x => +x);
        // for (let i = 0; i < fileName.length; i++) {
        //     for (let j = 0; j < fileName.length; j++) {
        //         if ()
        //     }
        // }
        let isNumber = (c) => typeof c === 'number';
        console.log(arrFile,'>>> ', arrFile.every(isNumber));
    }
}

module.exports = BubbleSort;