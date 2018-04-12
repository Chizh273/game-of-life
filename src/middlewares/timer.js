import { START_LIFE, updateGrid } from '../actions'

export default store => next => action => {
  if (action.type === START_LIFE) {
    setInterval(() => {
      const {cells} = store.cells

      const newGrid = cells.map((row, rowNumber) =>
        row.map((cell, cellNumber) => {
          let count = 0;

          if (row - 1 >= 0) { // top
            if (cells[row - 1][col]) count += 1;
          }

          if (row - 1 >= 0 && col - 1 >= 0) { // top left
            if (cells[row - 1][col - 1]) count += 1;
          }

          if (row - 1 >= 0 && col + 1 < co) { // top right
            if (cells[row - 1][col + 1]) count += 1;
          }

          if (col - 1 >= 0) { // left
            if (cells[row][col - 1]) count += 1;
          }

          if (col + 1 < co) { // right
            if (cells[row][col + 1]) count += 1;
          }

          if (row + 1 <rowNumber) { // bottom
            if (cells[row + 1][col]) count += 1;
          }

          if (row + 1 <rowNumber && col - 1 >= 0) { // bottom left
            if (cells[row + 1][col - 1]) count += 1;
          }

          if (row + 1 <rowNumber && col + 1 < co) { // bottom right
            if (cells[row + 1][col + 1]) count += 1;
          }

          return count;
        })
      )

      next(updateGrid(newGrid))
    }, 1000)
    return
  }

  return next(action)
}
