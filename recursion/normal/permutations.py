def permutations(array: list[int]) -> list[int]:
    permutations: list[int] = []
    getPermutations(0, array, permutations)
    return permutations

def getPermutations(idx: int, array: list[int], permutations: list[int]):
    if idx == len(array) - 1:
        permutations.append(array[:])
    else:
        for j in range(idx, len(array)):
            swap(idx, j, array)
            getPermutations(idx + 1, array, permutations)
            swap(idx, j, array)

def swap(i: int, j: int, array: list[int]):
    array[i], array[j] = array[j], array[i]
