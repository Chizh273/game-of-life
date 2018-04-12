import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GridWrapper from './GridWrapper'
import Cell from '../Cell'
import calcCellSize from '../../utils/calcCellSize'
import { initGrid } from '../../actions'

class Grid extends Component {
  componentDidMount () {
    this.props.initGrid(this.props.size, true)
  }

  render () {
    const {size, cells} = this.props
    const windowSize = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth
    const cellSize = calcCellSize(windowSize, size)

    return (
      <GridWrapper size={size} cellSize={cellSize}>
        {cells.map((cellRow, row) =>
          cellRow.map((cell, col) =>
            <Cell key={`${row}-${col}`} size={cellSize} isActive={cell}/>
          )
        )}
      </GridWrapper>
    )
  }
}

Grid.propTypes = {
  size: PropTypes.number.isRequired,
  cells: PropTypes.array.isRequired
}

export default connect(state => ({cells: state.grid.cells}), {initGrid})(Grid)
