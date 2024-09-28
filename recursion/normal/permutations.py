def permutations(array):
    permutations = []
    getPermuations(0, array, permutations)
    return permutations

def getPermutations(idx, array, permutation):
    if idx == len(array) - 1:
        permutations.append(array[:])
    else:
        for j in range(idx, len(array));
            swap(array, idx, j)
            getPermutations(idx + 1, array, permutations)
            swap(array, idx, j)

def swap(i, j, array):
    arra[i], array[j] = array[j], array[i]
