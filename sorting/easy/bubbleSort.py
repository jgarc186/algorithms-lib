def bubbleSort(array):
    for i in range(0, len(array)):
        for j in range(0, len(array) - 1):
            if array[j] > array[j + 1]:
                tmp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = tmp
    return array
