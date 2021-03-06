import { createStore, applyMiddleware, compose } from 'redux'
import timer from '../middlewares/timer'
import generateGrid from '../middlewares/generateGrid'
import reducer from '../reducers'

/* eslint-disable */
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist,
      // actionsCreators, serialize...
    }) : compose
/* eslint-enable */

const enhancer = composeEnhancers(
  applyMiddleware(
    generateGrid, timer
  )
)

const store = createStore(reducer, {}, enhancer)

export default store
