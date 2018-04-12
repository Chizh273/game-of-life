import random from 'lodash-es/random'
import { INIT_GRID, UPDATE_GRID } from '../actions'

const initialState = {
  cells: []
}

export default (state = initialState, action) => {
  const newState = {...state}
  const {type, payload} = action

  switch (type) {
    case INIT_GRID:
      newState.cells = []
      for (let rowNumber = 0; rowNumber < payload.size; rowNumber++) {
        let row = []

        if (payload.randomize) {
          for (let colNumber = 0; colNumber < payload.size; colNumber++) {
            row.push(!!random(0, 1))
          }
        }
        else {
          row = new Array(payload.size)
        }

        newState.cells.push(row)
      }

      break

    case UPDATE_GRID: {
      newState.cells = payload.newGrid
    }
  }

  return newState
}
