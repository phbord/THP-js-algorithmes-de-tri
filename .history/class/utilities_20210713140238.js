class Utilities {
    constructor() {}

    static transformFileInArray(data) {
        const arrFile = data.split(' ').map(x => Number.parseInt(x, 10));
    }
}

module.exports = Utilities;