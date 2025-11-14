
export default function bubbleSort(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        for (let j = 0; j <= array.length; j++) {
            if (array[j] > array[j + 1]) {
                const tmp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array;
}

// expect [1, 1, 2, 2, 3, 3, 4, 10]
// console.log(bubbleSort(sortingData[0]));
// expect [1, 2, 2, 2, 3, 4, 10, 21, 30, 50, 100]
// console.log(bubbleSort(sortingData[1]));
