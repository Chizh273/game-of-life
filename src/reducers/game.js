import { fromJS } from 'immutable'

const initialState = fromJS({
  size: 12,
  speed: 100
})

export default (state = initialState, action) => {
  const {type} = action

  switch (type) {

  }

  return state
}
