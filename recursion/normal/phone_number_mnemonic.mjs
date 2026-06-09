function phoneNumberMnemonic(phoneNumber) {
    const current = Array(phoneNumber.length - 1).fill("0")
    const mnemonic = [];
    getMnemonic(0, phoneNumber, current, mnemonic);
    return mnemonic
}

function getMnemonic(idx, phone, current, mnemonic) {
    if (idx === phone.length) {
        mnemonic.push(current.join(""));
    } else {
        const digit = phone[idx];
        const letters = DIGIT_LETTERS[digit];
        for (const letter of letters) {
          current[idx] = letter
          getMnemonic(idx + 1, phone, current, mnemonic)
        }
    }
}

const DIGIT_LETTERS = {
    "0": ["0"],
    "1": ["1"],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
};

const expect = 'ZLIIL1SFSS';
const mnemonic = phoneNumberMnemonic('9544517377');

console.log(mnemonic === expect);
