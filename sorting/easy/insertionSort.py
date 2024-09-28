def insertionSort(array):
    for i in range(0, array):
        j = i
        while j > 0 and array[j] < array[j - 1]:
            tmp = array[j - 1]
            array[j - 1] = array[j]
            array[j] = tmp
            j -= 1
    return array
