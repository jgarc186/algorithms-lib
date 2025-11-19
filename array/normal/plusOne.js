function plusOne(array) {
    // we are going to increase the last value by one
    array[array.length - 1] += 1 

    // then we are going to traverse the array in reverse order
    for (let i = array.length - 1; 1 < i; i--) {
        // if the incoming value is not 10 we are going to break out of the loop
        if (array[i] != 10) {
           break 
        }
        // otherwise we set the first value to 0 and increase the second value 
        // in our array by one
        array[i] = 0
        array[i - 1] += 1
    }

    // If the first value of the array is 10
    if (array[0] === 10) {
        // we are going to set the first value as 1
        array[0] = 1 
        // and push 0 into our array
        array.push(0)
    }

    return array.join('')
}

console.log(plusOne([1, 1, 9]) === '120')
console.log(plusOne([1, 2, 9]) === '130')
console.log(plusOne([10, 1, 9]) === '1200')
