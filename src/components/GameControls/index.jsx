import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Slider from 'material-ui/Slider'
import RaisedButton from 'material-ui/RaisedButton'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { initGrid, updateGameSpeed, updateGridSize } from '../../actions'
import { H3, Label } from '../styles/Typography'

const GameControlsWrapper = styled.div`
  padding: 10px;
`

class GameControls extends Component {
  static propTypes = {
    handleBackBtn: PropTypes.func
  }

  handleUpdateSize = (e, value) => {
    const size = parseInt(value, 10)

    this.props.updateGridSize(size)
    this.props.initGrid(true)
  }

  handleUpdateSpeed = (e, value) => this.props.updateGameSpeed(value)

  render () {
    return (
      <GameControlsWrapper>
        <H3>Settings</H3>

        <TextField
          type="number"
          floatingLabelText="Size"
          defaultValue={this.props.size}
          onChange={this.handleUpdateSize}
        />

        <div>
          <Label>Speed:</Label>
          <Slider
            step={10}
            min={100}
            max={1000}
            name="Speed"
            onChange={this.handleUpdateSpeed}
            defaultValue={this.props.speed}
          />
        </div>

        <RaisedButton
          label="Back"
          labelPosition="after"
          primary={true}
          fullWidth
          icon={<NavigationArrowBack/>}
          onClick={this.props.handleBackBtn}
        />

      </GameControlsWrapper>
    )
  }
}

export default connect(state => ({
  size: state.game.get('size'),
  speed: state.game.get('speed'),
}), {
  updateGridSize,
  updateGameSpeed,
  initGrid
})(GameControls)
