function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1; 

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        const possible = array[middle];

        if (possible === target) {
            return middle;
        } else if (possible > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2) === 1);
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9) === 8);
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11) === -1);
