function intAsArrayMultiply(num1, num2) {
    const sign = (num1[0] < 0) ^ (num2[0] < 0) ? -1 : 1;
    num1[0] = Math.abs(num1[0]);
    num2[0] = Math.abs(num2[0]);
    
    const result = new Array(num1.length + num2.length).fill(0);
    
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            result[i + j + 1] += num1[i] * num2[j];
            result[i + j] += Math.floor(result[i + j + 1] / 10);
            result[i + j + 1] %= 10;
        }
    }
    
    // Remove leading zeroes
    const firstNonZero = result.findIndex(x => x !== 0);
    const trimmed = firstNonZero === -1 ? [0] : result.slice(firstNonZero);
    
    return [sign * trimmed[0], ...trimmed.slice(1)];
}
