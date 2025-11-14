function dutchFlagPartition(pivotIdx, array) {
    let pivot = array[pivotIdx]

    let smaller = 0
    let equal = 0
    let larger = array.length - 1 

    while (equal < larger) {
        if (array[equal] < pivot) {
            [array[smaller], array[equal]] = [array[equal], array[smaller]]
            smaller++
            equal++
        } else if (array[equal] === pivot) {
            equal++
        } else {
            larger--
            [array[equal], array[larger]] = [array[larger], array[equal]]
        }
    }
}
