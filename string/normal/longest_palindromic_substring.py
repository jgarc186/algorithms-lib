# The Big O notation for this algorithm is O(n^2) time complexity and O(1) space complexity
# The explanation for this algorithm is as follows:
# - The algorithm starts by initializing the current_longest variable to [0, 1]
# - The algorithm then iterates through the string from the second character to the last character
# - For each character, the algorithm calls the get_longest_palindrome_from function twice
# - The get_longest_palindrome_from function is a helper function that finds the longest palindrome centered at a given index
# - The algorithm then updates the current_longest variable with the longest palindrome found so far
# - Finally, the algorithm returns the longest palindrome found
def longest_palindromic_substring(string: str) -> str:
    current_longest = [0, 1]
    for i in range(1, len(string)):
        odd = get_longest_palindrome_from(string, i - 1, i + 1)
        even = get_longest_palindrome_from(string, i - 1, i)
        longest = max(odd, even, key = lambda x: x[1] - x[0])
        current_longest = max(longest, current_longest, key = lambda x: x[1] - x[0])
    return string[current_longest[0]:current_longest[1]]

# The Big O notation for this algorithm is O(n) time complexity and O(1) space complexity
# The explanation for this algorithm is as follows:
# - The algorithm starts by initializing the left_idx and right_idx variables to the given index
# - The algorithm then iterates while the left_idx is greater than or equal to 0 and the right_idx is less than the length of the string
# - For each iteration, the algorithm checks if the characters at the left_idx and right_idx are equal
# - If the characters are equal, the algorithm decrements the left_idx and increments the right_idx
# - If the characters are not equal, the algorithm breaks out of the loop
# - The algorithm then returns the indices of the longest palindrome found
def get_longest_palindrome_from(string: str, left_idx: int, right_idx: int) -> list[int]:
    while left_idx >= 0 and right_idx < len(string):
        if string[left_idx] != string[right_idx]:
            break
        left_idx -= 1
        right_idx += 1
    return [left_idx + 1, right_idx]
