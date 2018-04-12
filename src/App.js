import React, { Component } from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Game from './components/Game'
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
        <MuiThemeProvider>
          <AppWrapper>
            <Game/>
          </AppWrapper>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
