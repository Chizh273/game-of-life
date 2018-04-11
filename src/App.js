import React, { Component } from 'react'
import Grid from './components/Grid'
import styled from 'styled-components'

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
      <AppWrapper>
        <Grid size={36}/>
      </AppWrapper>
    )
  }
}

export default App
