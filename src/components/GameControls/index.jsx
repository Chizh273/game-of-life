import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Slider from 'material-ui/Slider'
import styled from 'styled-components'

const Label = styled.label`
  display: flex;
`

class GameControls extends Component {
  static propTypes = {}

  render () {
    return (
      <div className="Controlls">
        <TextField floatingLabelText="Size"/>
        <Label>
          Speed:
          <Slider
            step={10}
            min={100}
            max={1000}
            name="Speed"
            defaultValue={300}
          />
        </Label>
      </div>
    )
  }
}

export default GameControls
