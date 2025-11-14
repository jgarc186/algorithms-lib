function findThreeLargestNumbers(numbers) {
    let threeLargest = [null, null, null];
    numbers.forEach(number => {
        organize(number, threeLargest);
    });
    return threeLargest;
} 


function organize(number, threeLargest) {
    if (threeLargest[2] === null || threeLargest[2] < number) {
        shiftSwap(2, number, threeLargest);
    }  else if (threeLargest[1] === null || threeLargest[1] < number) {
        shiftSwap(1, number, threeLargest);
    } else if (threeLargest[0] === null || threeLargest[0] < number) {
        shiftSwap(0, number, threeLargest);
    } 
}

function shiftSwap(idx, value, array) {
    for (let i = 0; i <= idx; i++) {
        if (i === idx) {
            array[idx] = value;
        } else {
            array[i] = array[i + 1];
        }
    }
}
const result = findThreeLargestNumbers([1, 2, 30, 4, 50, 6, 7, 80])

console.log(result);
