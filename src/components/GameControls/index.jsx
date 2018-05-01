import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Slider from 'material-ui/Slider'
import RaisedButton from 'material-ui/RaisedButton'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import Checkbox from 'material-ui/Checkbox'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { H3, Label } from '../shared/Typography'
import {
  initGrid,
  updateGameSpeed,
  updateGridSize,
  updateRandomize
} from '../../actions'

const ControlsWrapper = styled.div`
  padding: 10px;
`

const RandomizeWrapper = styled.div`
  margin-bottom: 25px;
`

class GameControls extends Component {
  static propTypes = {
    handleBackBtn: PropTypes.func
  }

  sliderStyle = {
    marginBottom: '24px'
  }

  handleUpdateSize = (e, value) => {
    const size = parseInt(value, 10)

    this.props.updateGridSize(size)
    this.props.initGrid(true)
  }

  handleUpdateSpeed = (e, value) => this.props.updateGameSpeed(value)
  handleUpdateRandomize = (e, value) => this.props.updateRandomize(value)

  render () {
    return (
      <ControlsWrapper>
        <H3>Settings</H3>

        <TextField
          type="number"
          min="3"
          max="32"
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
            sliderStyle={this.sliderStyle}
          />
        </div>

        <RandomizeWrapper>
          <Checkbox
            label="Randomize"
            checked={this.props.randomize}
            onCheck={this.handleUpdateRandomize}
          />
        </RandomizeWrapper>

        <RaisedButton
          label="Back"
          labelPosition="after"
          primary={true}
          fullWidth
          icon={<NavigationArrowBack/>}
          onClick={this.props.handleBackBtn}
        />

      </ControlsWrapper>
    )
  }
}

export default connect(state => ({
  size: state.game.get('size'),
  speed: state.game.get('speed'),
  randomize: state.game.get('randomize'),
}), {
  updateGridSize,
  updateGameSpeed,
  updateRandomize,
  initGrid
})(GameControls)
