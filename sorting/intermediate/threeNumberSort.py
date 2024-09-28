def threeNumberSort(array, order):
    firstIdx, secondIdx, thirdIdx = 0, 0, len(array) - 1

    firstValue, secondValue = order[0], order[1]

    while secondIdx <= thirdIdx:
        value = array[secondIdx]

        if value == firstValue:
            array[firstIdx], array[secondIdx] = array[secondIdx], array[firstIdx]
            firstIdx += 1
            secondIdx += 1

        elif value == secondValue:
            secondIdx += 1

        else:
            array[secondIdx], array[thirdIdx] = array[thirdIdx], array[secondIdx]
            thirdIdx -= 1

    return array
