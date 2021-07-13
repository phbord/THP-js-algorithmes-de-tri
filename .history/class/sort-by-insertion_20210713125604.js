class SortByInsertion {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        console.log('>>>', data);
        let arrFile = data.split(' ').map(x => +x);
        for (let i = 0; i < arrFile.length; i++) {
            let current = data[i]
        }
    }
}

module.exports = SortByInsertion;