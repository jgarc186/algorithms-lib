def findThreeLargestNumbers(numbers):
    threeLargestNumbers = [None, None, None]
    for number in numbers:
        organize(threeLargestNumbers, number)

    return threeLargestNumbers


def organize(threeLargestNumbers, number):
    if threeLargestNumbers[2] is None or threeLargestNumbers[2] < number:
        updateValues(threeLargestNumbers, 2, number)
    elif threeLargestNumbers[1] is None or threeLargestNumbers[1] < number:
        updateValues(threeLargestNumbers, 1, number)
    elif threeLargestNumbers[0] is None or threeLargestNumbers[0] < number:
        updateValues(threeLargestNumbers, 0, number)


def updateValues(array, idx, value):
    for i in range(idx + 1):
        if i == idx:
            array[idx] = value
        else:
            array[i] = array[i + 1]
