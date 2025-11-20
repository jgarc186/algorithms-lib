function intAsArrayMultiply(num1, num2) {
    // we try to determine if it is a negative or a positve number that we are dealing with 
    // in our array we are going to be constructing
    const sign = (num1[0] < 0) ^ (num2[0] < 0) ? -1 : 1;

    // we are going to set the first values of the two arrays to an absulute number
    // this way we are dealing with positive values and we already know if is going to be 
    // either a positve or negative since we alreay determine the sign of the number
    num1[0] = Math.abs(num1[0]);
    num2[0] = Math.abs(num2[0]);

    // we want to create a new array full of 0 based of the sum total of the two incoming arrays.
    const result = new Array(num1.length + num2.length).fill(0);
    
    // We are going to inverse both array to do manual multiplication
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            // we are going to multiply the values of both arrays and store it in the 
            // most right section of our new array
            result[i + j + 1] += num1[i] * num2[j];
            // Then we are going to add the most upright value divided by 10 and pointed to the 
            // closest interget value to the sum of i + j index in our array
            result[i + j] += Math.floor(result[i + j + 1] / 10);
            // Once we have that we are going to % 10 of the most right value of the array
            result[i + j + 1] %= 10;
        }
    }

    // we are going to find the first index with a zero in it
    const firstNonZero = result.findIndex(x => x !== 0);
    // if everything in the array is a 0, then just return an array with a 0 otherwise lets slice the array from the 
    // first none zero value so we can remove all leading zeros
    const trimmed = firstNonZero === -1 ? [0] : result.slice(firstNonZero);
   
    // then we are going to create the array that we want to return to the user
    // we multiply with the sign and the trimmed value, then we spread the value starting from the first trim
    return [sign * trimmed[0], ...trimmed.slice(1)];
}
