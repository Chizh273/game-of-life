import { INIT_GRID, updateGrid } from '../actions'
import random from 'lodash-es/random'
import { List } from 'immutable'

export default store => next => action => {
  const {type} = action

  if (type === INIT_GRID) {
    const state = store.getState()
    const size = state.game.get('size')
    const randomize = state.game.get('randomize')
    const grid = []

    for (let rowNumber = 0; rowNumber < size; rowNumber++) {
      let row = []

      if (randomize) {
        for (let colNumber = 0; colNumber < size; colNumber++) {
          row.push(!!random(0, 1))
        }
      }
      else {
        row = new Array(size)
      }

      grid.push(List(row))
    }

    next(updateGrid(grid))
  }

  return next(action)
}