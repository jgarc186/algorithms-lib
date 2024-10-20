# We are given a list of strings, we need to group anagrams together.
# An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
# For example, the words "listen" and "silent" are anagrams.
# The algorithm uses a dictionary to group anagrams together.
# The algorithm iterates through the list of words and sorts each word.
# The sorted word is then used as a key in the dictionary.
# If the key exists in the dictionary, the word is appended to the list of anagrams.
# If the key does not exist in the dictionary, a new list is created with the word as the first element.
# Finally, the algorithm returns the values of the dictionary as a list of lists.
# The Big O notation for this algorithm is O(n * k * log(k)) time complexity and O(n * k) space complexity, where n is the number of words in the list and k is the length of the longest word.
def group_anagrams(words: list[str]) -> list[list[str]]:
    anagrams: dict[str, list[str]] = {}
    for word in words:
        sortedword = "".join(sorted(word))
        if sortedword in anagrams:
            anagrams[sortedword].append(word)
        else:
            anagrams[sortedword] = [word]
    return list(anagrams.values())
