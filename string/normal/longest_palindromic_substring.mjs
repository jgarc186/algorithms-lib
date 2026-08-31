function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1]
  for (let i = 1; i <= string.length - 1; i++) {
    const odd = getPalindrome(string, i - 1, i + 1)
    const even = getPalindrome(string, i - 1, i)
    const longest = getMax(odd, even)
    currentLongest = getMax(longest, currentLongest)
  }
  return string.slice(currentLongest[0], currentLongest[1])
}

function getPalindrome(string, left, right) {
  while (left >= 0 && right <= string.length - 1) {
    if (string[left] !== string[right]) break
    left--
    right++
  }
  return [left + 1, right]
}

function getMax(arr1, arr2) {
  return (arr1[1] - arr1[0]) > (arr2[1] - arr2[0]) ? arr1 : arr2
}
