# We are trying to determine if an array is either non-decreasing or non-increasing.
# This will help us determine if the array is monotomic.
# The definition of monotomic is that the array is either non-decreasing or non-increasing.
def isMonotomic(array: list[int]) -> bool:
    isNonDecreasing = True
    isNonIncreasing = True

    for i in range(1, len(array)):
        if array[i] < array[i-1]:
            isNonDecreasing = False
        if array[i] > array[i - 1]:
            isNonDecreasing = False

    return isNonDecreasing or isNonIncreasing
