import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Grid from './components/Grid'
import styled from 'styled-components'
import store from './store'

const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppWrapper>
          <Grid size={36}/>
        </AppWrapper>
      </Provider>
    )
  }
}

export default App
