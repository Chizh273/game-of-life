import React, { Component, Fragment } from 'react'
import Card from 'material-ui/Card'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import styled from 'styled-components'
import GameControls from '../GameControls'
import Grid from '../Grid'
import GitHubIcon from '../shared/GitHubIcon'

const Top = styled.div`
  width: 100%;
  margin-bottom: auto;
`

const Center = styled.div`
  margin: auto;
`

class Game extends Component {
  static propTypes = {}

  state = {open: false}

  titleStyles = {fontSize: 64, textAlign: 'center'}
  rightIconStyles = {margin: 'auto'}

  handleSideBarToggle = () => this.setState({open: !this.state.open})

  render () {
    return (
      <Fragment>
        <Top>
          <AppBar
            titleStyle={this.titleStyles}
            title="Game of Life"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={this.handleSideBarToggle}
            iconElementRight={<a href="https://github.com/chizh273/game-of-life" target="_blank"><GitHubIcon/></a>}
            iconStyleRight={this.rightIconStyles}
          />
        </Top>

        <Drawer open={this.state.open} width={270}>
          <GameControls handleBackBtn={this.handleSideBarToggle}/>
        </Drawer>

        <Center>
          <Card>
            <Grid size={this.props.size}/>
          </Card>
        </Center>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    size: state.game.get('size')
  })
)(Game)
