// Given an array of elements (either numbers or arrays), we want to add the sum of the numeric values of the array and multiply by
// the amount of nested arrays that we find as we iterate over it.
function productSum(array, multiplier = 1) {
    let sum = 0;
    array.forEach(element => {
        if (Array.isArray(element)) {
            sum += productSum(element, multiplier + 1);
        } else {
            sum += element;
        }
    });
    return sum * multiplier;
}

console.log(productSum([1, [3], 2]));
