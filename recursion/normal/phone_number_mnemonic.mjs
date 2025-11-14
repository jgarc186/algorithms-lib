function phoneNumberMnemonic(phoneNumber) {
    let current = [];
    const mnemonic = [];
    getMnemonic(0, phoneNumber, current, mnemonic);
    return mnemonic[mnemonic.length - 1].join('');
}

function getMnemonic(idx, phone, current, mnemonic) {
    if (idx === phone.length) {
        mnemonic.push(current);
    } else {
        const digit = phone[idx];
        const letters = DIGIT_LETTERS[digit];
        letters.forEach(letter => {
            current[idx] = letter;
            getMnemonic(idx + 1, phone, current, mnemonic);
        });
    }
}

const DIGIT_LETTERS = {
    '0': ['0'],
    '1': ['1'],
    '2': ['A', 'B', 'C'],
    '3': ['D', 'E', 'F'],
    '4': ['G', 'H', 'I'],
    '5': ['J', 'K', 'L'],
    '6': ['M', 'N', 'O'],
    '7': ['P', 'Q', 'R', 'S'],
    '8': ['T', 'U', 'V'],
    '9': ['W', 'X', 'Y', 'Z']
}

const expect = 'ZLIIL1SFSS';
const mnemonic = phoneNumberMnemonic('9544517377');

console.log(mnemonic === expect);
