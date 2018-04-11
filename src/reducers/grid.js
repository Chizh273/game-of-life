import random from 'lodash-es/random'
import { INIT_GRID } from '../actions'

const initialState = {
  cells: []
}

export default (state = initialState, {type, payload}) => {
  const newState = {...state}

  switch (type) {
    case INIT_GRID:
      newState.cells = []
      for (let rowNumber = 0; rowNumber < payload.size; rowNumber++) {
        let row = []

        if (payload.randomize) {
          for (let colNumber = 0; colNumber < payload.size; colNumber++) {
            row.push(random(0, 1))
          }
        }
        else {
          row = new Array(payload.size)
        }

        newState.cells.push(row)
      }

      break
  }

  return newState
}
