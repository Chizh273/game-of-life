import { START_LIFE, updateGrid } from '../actions'

export default store => next => action => {
  if (action.type === START_LIFE) {
    setInterval(() => {
      debugger;
      const {cells} = store.getState().grid

      const newGrid = cells.map((row, rowNumber) =>
        row.map((cell, colNumber) => {
          const countNeighbors = getCountNeighbors({row: rowNumber, col: colNumber}, cells)

          if(cell && countNeighbors < 2) return false;

          if(cell && (countNeighbors === 3 || countNeighbors === 2)) return true;

          if(cell && countNeighbors >= 3) return false;

          return !cell && countNeighbors === 3;
        })
      )

      next(updateGrid(newGrid))
    }, 100)
    return
  }

  return next(action)
}

const getCountNeighbors = ({row, col}, grid) => {
  let count = 0
  let rows = grid.length
  let cols = grid[0].length

  if (row - 1 >= 0) { // top
    if (grid[row - 1][col]) {
      count += 1
    }
  }

  if (row - 1 >= 0 && col - 1 >= 0) { // top left
    if (grid[row - 1][col - 1]) {
      count += 1
    }
  }

  if (row - 1 >= 0 && col + 1 < cols) { // top right
    if (grid[row - 1][col + 1]) {
      count += 1
    }
  }

  if (col - 1 >= 0) { // left
    if (grid[row][col - 1]) {
      count += 1
    }
  }

  if (col + 1 < cols) { // right
    if (grid[row][col + 1]) {
      count += 1
    }
  }

  if (row + 1 < rows) { // bottom
    if (grid[row + 1][col]) {
      count += 1
    }
  }

  if (row + 1 < rows && col - 1 >= 0) { // bottom left
    if (grid[row + 1][col - 1]) {
      count += 1
    }
  }

  if (row + 1 < rows && col + 1 < cols) { // bottom right
    if (grid[row + 1][col + 1]) {
      count += 1
    }
  }

  return count
}
