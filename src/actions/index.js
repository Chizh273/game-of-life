export const INIT_GRID = 'INIT_GRID'

export const initGrid = (size, randomize) => ({
  type: INIT_GRID,
  payload: {
    size,
    randomize
  }
})
