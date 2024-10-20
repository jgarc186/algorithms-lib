def group_anagrams(words: list[str]) -> list[str]:
    anagrams = {}
    for word in words:
        sortedword = "".join(sorted(word))
        if sortedword in anagrams:
            anagrams[sortedword].append(word)
        else:
            anagrams[sortedword] = [word]
    return list(anagrams.values())
