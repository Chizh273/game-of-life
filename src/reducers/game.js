import { fromJS } from 'immutable'
import { UPDATE_GAME_SPEED, UPDATE_GRID_SIZE } from '../actions'

const initialState = fromJS({
  size: 12,
  speed: 100
})

export default (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case UPDATE_GAME_SPEED:
      return state.set('speed', payload.speed)
    case UPDATE_GRID_SIZE:
      return state.set('size', payload.size)
    default:
      return state
  }
}
