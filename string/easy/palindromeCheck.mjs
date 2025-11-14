function palindromeCheck(string) {
    const reverse = [];
    let i = string.length - 1;
    while (0 <= i) {
        reverse.push(string[i]);
        i--;
    }
    return reverse.join('') === string;
}

// true
console.log(palindromeCheck("ama"));
// false
console.log(palindromeCheck("mama"));
