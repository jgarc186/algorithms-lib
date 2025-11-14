export default function threeNumberSort(array, ordered) {
    let firstIdx = 0; 
    let secondIdx = 0; 
    let thirdIdx = array.length - 1;
    let firstValue = ordered[0]; 
    let secondValue = ordered[1];

    while (secondIdx <= thirdIdx) {
        const possible = array[secondIdx];

        if (possible === firstValue) {
            swap(firstIdx, secondIdx, array);
            firstIdx++;
            secondIdx++;
        } else if (possible === secondValue) {
            secondIdx++;
        } else {
            swap(secondIdx, thirdIdx, array);
            thirdIdx--;
            secondIdx++;
        }
    }

    return array;
}

function swap(i, j, array) {
    [array[i], array[j]] = [array[j], array[i]];
}

console.log(threeNumberSort([1, 2, 1, 3, 2, 1, 1], [1, 2, 3]));

