def binarySearch(array, target):
    left, right = 0, len(target) - 1

    while left <= right:
        middle = (left + right) // 2
        value = array[middle]

        if value == target:
            return middle
        elif value > target:
            right = middle - 1
        else:
            left = middle + 1

    return -1
