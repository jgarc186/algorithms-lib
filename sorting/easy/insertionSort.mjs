import { sortingData } from "../../mocks/sortingData.mjs";

export default function insertionSort(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            const tmp = array[j- 1];
            array[j - 1] = array[j];
            array[j] = tmp;
            j--;
        }
    }
    return array;
}

// expect [1, 1, 2, 2, 3, 3, 4, 10]
console.log(insertionSort(sortingData[0]));
// expect [1, 2, 2, 2, 3, 4, 10, 21, 30, 50, 100]
console.log(insertionSort(sortingData[1]));
