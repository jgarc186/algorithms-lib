import { sortingData } from "../../mocks/sortingData.mjs";

export default function selectionSort(array) {
    let i = 0;
    while (i <= array.length - 1) {
        let j = i;
        for (let k = i; k <= array.length - 1; k++) {
            if (array[j] > array[k]) {
                j = k;
            }
        }
        const tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
        i++;
    }
    return array;
}

// expect [1, 1, 2, 2, 3, 3, 4, 10]
console.log(selectionSort(sortingData[0]));
// expect [1, 2, 2, 2, 3, 4, 10, 21, 30, 50, 100]
console.log(selectionSort(sortingData[1]));
