def searchSortedMatrix(matrix, target):
    row = 0
    col = len(matrix[0]) - 1
    while row < len(matrix) and col > 0:
        value = matrix[row][col]
        if value > target:
            col -= 1
        elif value < target:
            row += 1
        else:
            return [row, col]
    return [-1, -1]