// this is O(log n) in time complexity, since per every operation we are
// reducing it by half of the input value.
function BinarySearch(array, target) {
    if (!array) {
        return -1;
    }
    let start = 0;
    let end = array.length - 1;
    while (end >= start) {
        const middle = Math.floor((start + end) / 2);
        const value = array[middle];

        if (value === target) {
            return middle;
        } else if (value > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
}

console.log("Running Tests");
const test1 = BinarySearch([12, 14, 18, 20, 25], 25);
const test2 = BinarySearch([], 25);
const test3 = BinarySearch(null, 25);
const test4 = BinarySearch([12, 14, 18, 20, 25, 26, 28, 29, 50, 100], 25);
const test5 = BinarySearch([101, 12, 14, 18, 20, 96, 30, 1, 25, 26, 28, 29, 50, 100], 25);

test1 === 4 ? console.log("test 1 Passed") : console.log("test 1 Failed");
test2 === -1 ? console.log("test 2 Passed") : console.log("test 2 Failed");
test3 === -1 ? console.log("test 3 Passed") : console.log("test 3 Failed");
test4 === 4 ? console.log("test 4 Passed") : console.log("test 4 Failed");
test5 === -1 ? console.log("test 5 Passed") : console.log("test 5 Failed");
