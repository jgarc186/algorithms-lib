def selectionSort(array):
    i = 0
    while i <= len(array) - 1:
        minvalue = i
        for j in range(i + 1, len(array)):
            if array[minvalue] > array[j]:
                minvalue = j
        tmp = array[minvalue]
        array[minvalue] = array[i]
        array[i] = tmp
        i += 1
    return array
