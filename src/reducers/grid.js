import { UPDATE_GRID, ADD_CELL_LIFE } from '../actions'
import { fromJS, List } from 'immutable'

const initialState = fromJS({
  cells: List([])
})

export default (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case UPDATE_GRID: {
      state = state.set('cells', List(payload.newGrid))
      break
    }
    case ADD_CELL_LIFE:
      state = state.updateIn(['cells', payload.row, payload.col], cell => !cell)
      break
  }

  return state
}
