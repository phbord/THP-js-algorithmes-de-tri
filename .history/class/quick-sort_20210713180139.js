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
        let pivot = data[Math.floor((r + left) / 2)]; //middle element
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
        if (data.length > 1) {
            index = this.partition(data, l, r); //index returned from partition
            let partitionIndex = this.partition(data, l, r);
            if (l < index - 1) quickSort(data, l, index - 1);
            if (index < r) quickSort(data, index, r);
            this.count += 1;
        }
    }

    sort(data) {
        let l = Math.min(...data);
        let r = Math.max(...data);
        this.quickSort(data, l, r);
        console.log('TRI RAPIDE : ', data);
        console.log('Nombre de comparaisons : ', this.count, '\n\n');
        return data;
    }
}

module.exports = QuickSort;