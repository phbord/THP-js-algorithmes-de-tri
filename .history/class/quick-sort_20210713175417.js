const Utilities = require('./utilities');

class QuickSort {
    constructor() {
        this.count = 0;
    }

    swap(data, l, r) {
        let temp = data[l];
        data[l] = data[r];
        data[r] = temp;
    }

    partition(data, l, r) {
        let pivot = data[Math.floor((right + left) / 2)], //middle element
        let i = l;
        let j = r;
        while (i <= j) {
            while (data[i] < pivot) {
                i++;
            }
            while (data[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(data, i, j); //swap two elements
                i++;
                j--;
            }
        }
        return i;
    }

    quickSort(data, l, r) {
        let index;
        if (l < r) {
            let partitionIndex = partition(data, l, r);
            quickSort(data, l, partitionIndex - 1);
            quickSort(data, partitionIndex + 1, r);
            this.count += 1;
        }
        // let pivot = arrFile[r];
        // for (j in l) {
        //     if (arrFile[i] < pivot) {
        //         i += 1;
        //     }
        // }
        // return i + 1;
    }

    sort(data) {
        let l = Math.min(...data);
        let r = Math.max(...data);
        this.quickSort(data, l, r);
        console.log('TRI RAPIDE : ', arrFile);
        console.log('Nombre de comparaisons : ', this.count, '\n\n');
        return arrFile;
    }
}

module.exports = QuickSort;