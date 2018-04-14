import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import GameControls from '../GameControls'
import Grid from '../Grid'

class Game extends Component {
  static propTypes = {}

  render () {
    return (
      <Fragment>
        <GameControls/>
        <Grid size={this.props.size}/>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    size: state.game.get('size')
  })
)(Game)
