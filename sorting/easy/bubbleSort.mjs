const sortingData = [2, 5, 3, 4, 1]

export default function bubbleSort(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        for (let j = 0; j <= array.length - 1; j++) {
            if (array[j] > array[i]) {
                const tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(sortingData));
