function runLengthEncoding(string) {
  let currentRun = 1;
  const sequentialChars = [];  
  for (let i= 1; i < string.length; i++) {
    const previousChar = string[i - 1]
    const currentChar = string[i]
    
    if (currentChar !== previousChar || currentRun === 9) {
      sequentialChars.push(currentRun.toString());
      sequentialChars.push(previousChar);
      currentRun = 0;
    }
    currentRun += 1;
  }
  sequentialChars.push(currentRun.toString());
  sequentialChars.push(string[string.length - 1]);
  return sequentialChars.join('');
}

