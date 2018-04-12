import { INIT_GRID, updateGrid } from '../actions'
import random from 'lodash-es/random'
import { List } from 'immutable'

export default state => next => action => {
  const {type, payload} = action

  if (type === INIT_GRID) {
    const grid = []

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

      grid.push(List(row))
    }

    next(updateGrid(grid))
  }

  return next(action)
}