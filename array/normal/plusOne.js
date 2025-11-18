function plusOne(array) {
    array[array.length - 1] += 1 

    for (let i = array.length - 1; 1 < i; i--) {
        if (array[i] != 10) {
           break 
        }
        array[i] = 0
        array[i - 1] += 1
    }

    if (array[0] === 10) {
        array[0] = 1 
        array.push(0)
    }

    return array.join('')
}

console.log(plusOne([1, 1, 9]) === '120')
console.log(plusOne([1, 2, 9]) === '130')
console.log(plusOne([10, 1, 9]) === '1200')
