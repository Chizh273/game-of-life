import React, { Component } from 'react'
import PropTypes from 'prop-types'
import range from 'lodash-es/range'
import GridWrapper from './GridWrapper'
import Cell from '../Cell'
import calcCellSize from '../../utils/calcCellSize'
import { connect } from 'react-redux'

class Grid extends Component {
  render () {
    const {size} = this.props
    const windowSize = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth
    const cellSize = calcCellSize(windowSize, size)

    return (
      <GridWrapper size={size} cellSize={cellSize}>
        {range(0, size * size).map(
          item => <Cell key={item} size={cellSize} isActive={true}/>
        )}
      </GridWrapper>
    )
  }
}

Grid.propTypes = {
  size: PropTypes.number.isRequired
}

export default connect()(Grid)
