class SortBySelection {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        let arrFile = data.split(' ').map(x => Number.parseInt(x, 10));
        for (let i = 0; i < arrFile.length; i++) {
            let min = j;
            for (let j = 0; j < arrFile.length; j++) {
                if (arrFile[i] < arrFile[min]) {}
            }
        }
    }
}

module.exports = SortBySelection;