def get_phone_number_mnemonic(phone_number: str) -> list[str]:
    mnemonics: list[str] = []
    current_mnemonic = ['0'] * len(phone_number)
    get_phone_number_mnemonic_helper(0, phone_number, current_mnemonic, mnemonics)
    return mnemonics

def get_phone_number_mnemonic_helper(idx: int, phone_number: str, current_mnemonic: list[str], mnemonics: list[str]):
    if idx == len(phone_number):
        mnemonics.append(''.join(current_mnemonic))
    else:
        digit = phone_number[idx]
        letters = DIGIT_LETTERS[digit]
        for letter in letters:
            current_mnemonic[idx] = letter
            get_phone_number_mnemonic_helper(idx + 1, phone_number, current_mnemonic, mnemonics)

DIGIT_LETTERS = {
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
