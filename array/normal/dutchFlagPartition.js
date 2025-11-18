/**
 * Write a program that takes an array A and an index I into A, and rearranges
 * the elements such that all elements less than A[i] (the "pivot") appear first,
 * followed by elements equal to the pivot, followed by elements greater than the pivot.
 *
 * This is known as Dutch national flag partitioning, because the Dutch national flag consists
 * of three horizontal bands, each in a different color.
 */
function dutchFlagPartition(idx, array) {
    // we want to get the value that we want to pivot from
    let pivot = array[idx]

    let smaller = 0
    let equal = 0
    let larger = array.length - 1

    // as long as the equal value is less than the larger
    // we are going to iterate over our array
    while (equal <= larger) {
        // if the equal value is less than the pivot value
        if (array[equal] < pivot) {
            // if this is the case we are going to swap the values 
            // then increment the count for the smaller and equal so we can keep going 
            // in the loop
            [array[smaller], array[equal]] = [array[equal], array[smaller]]
            smaller++
            equal++
        } else if (array[equal] === pivot) {
            // if the pivot value is equals to the pivot then we just increament the 
            // the equal
            equal++
        } else {
            // otherwise wise we decrease the larger value and swap the 
            // equal and the larger value
            [array[equal], array[larger]] = [array[larger], array[equal]]
            larger--
        }
    }
}

const array = [0, 1, 2, 0, 2, 1, 1]
dutchFlagPartition(2, array)

// answer: [0, 1, 0, 1, 1, 2, 2]
console.log(array)

