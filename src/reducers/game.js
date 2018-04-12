import { UPDATE_GRID, ADD_CELL_LIFE } from '../actions'
import { fromJS } from 'immutable'

const initialState = fromJS({
  size: 12,
  speed: 100
})

export default (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {

  }

  return state
}
