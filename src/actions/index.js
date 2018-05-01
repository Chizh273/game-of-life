export const INIT_GRID = 'INIT_GRID'
export const START_LIFE = 'START_LIFE'
export const UPDATE_GRID = 'UPDATE_GRID'
export const ADD_CELL_LIFE = 'ADD_CELL_LIFE'

export const UPDATE_GRID_SIZE = 'UPDATE_GRID_SIZE'
export const UPDATE_GAME_SPEED = 'UPDATE_GAME_SPEED'

export const initGrid = (randomize) => ({
  type: INIT_GRID,
  payload: {
    randomize
  }
})

export const startLife = () => ({type: START_LIFE})

export const updateGrid = newGrid => ({
  type: UPDATE_GRID,
  payload: {
    newGrid
  }
})

export const addCellLife = (row, col) => ({
  type: ADD_CELL_LIFE,
  payload: {
    row, col
  }
})

export const updateGridSize = size => ({
  type: UPDATE_GRID_SIZE,
  payload: {
    size
  }
})

export const updateGameSpeed = speed => ({
  type: UPDATE_GAME_SPEED,
  payload: {
    speed
  }
})
