export const INIT_GRID = 'INIT_GRID'
export const START_LIFE = 'START_LIFE'
export const UPDATE_GRID = 'UPDATE_GRID'

export const initGrid = (size, randomize) => ({
  type: INIT_GRID,
  payload: {
    size,
    randomize
  }
})

export const startLife = () => ({type: START_LIFE})

export const updateGrid = (newGrid) => ({
  type: UPDATE_GRID,
  payload: {
    newGrid
  }
})
