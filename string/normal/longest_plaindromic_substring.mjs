function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1];
  
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    
    const longest = getMax(odd, even);
    currentLongest = getMax(longest, currentLongest);
  }
  
  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) {
      break;
    }
    leftIdx -= 1;
    rightIdx += 1;
  }
  
  return [leftIdx + 1, rightIdx];
}

function getMax(arr1, arr2) {
  return (arr1[1] - arr1[0]) > (arr2[1] - arr2[0]) ? arr1 : arr2;
}
