function revealMinesweeper(board, row, column) {
  if (board[row][column] === 'M') {
    board[row][column] = 'X';
    return board;
  }

  const neighbors = getNeighbors(board, row, column);
  let count = 0;
  neighbors.forEach(neighbor => {
    if (board[neighbor[0]][neighbor[1]] === "M") {
      count++;
    }
  });

  if (count > 0) {
    board[row][column] = String(count);
  } else {
    board[row][column] = '0';
    neighbors.forEach(neighbor => {
      if (board[neighbor[0]][neighbor[1]] === "H") {
        revealMinesweeper(board, neighbor[0], neighbor[1]);
      } 
    });
  }

  return board;
}

function getNeighbors(board, row, col) {
  const neighbors = [];
  const dirs = [[1, 1], [1, 0], [0, 1], [-1, 1], [1, -1], [-1, -1], [-1, 0], [0, -1]];
  dirs.forEach(dir => {
    const newCol = dir[0] + col;
    const newRow = dir[1] + row;

    if (0 <= newRow && newRow < board.length && 0 <= newCol && newCol < board[0].length) {
        neighbors.push([newRow, newCol]);
    }
  });
  return neighbors;
}
