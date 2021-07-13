class Utilities {
    constructor() {}

    static transformFileInArray(data) {
        const arrFile = data.split(' ').map(x => Number.parseInt(x, 10));
        return arrFile;
    }

    swap(data, n) {
        let temp = data[n];
        data[n] = data[n - 1];
        data[n - 1] = temp;
    }
}

module.exports = Utilities;