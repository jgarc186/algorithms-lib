function caesarCipherEncryptor(string, key) {
  const newKey = key % 26;
  const newString = [];
  for (const char of string) {
    newString.push(getNewChar(char, newKey));
  }
  return newString.join("");
}

function getNewChar(char, key) {
  const newChar = char.charCodeAt(0) + key;
  return newChar <= 122 ? String.fromCharCode(newChar) : String.fromCharCode(96 + (newChar % 122));
}
