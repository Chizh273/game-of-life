import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GridWrapper from './GridWrapper'
import Cell from '../Cell'
import { initGrid, startLife, addCellLife } from '../../actions'
import calcCellSize from '../../utils/calcCellSize'

class Grid extends Component {
  componentDidMount () {
    this.props.initGrid(true)
    this.props.startLife()
  }

  handleCellClick = (row, col) => this.props.addCellLife(row, col)

  render () {
    const {size, cells} = this.props
    const windowSize = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth
    const cellSize = calcCellSize(windowSize, size, 90)

    return (
      <GridWrapper size={size} cellSize={cellSize}>
        {cells.map((cellRow, row) =>
          cellRow.map((cell, col) =>
            <Cell
              key={`${row}-${col}`}
              size={cellSize}
              isActive={cell}
              row={row}
              col={col}
              onCellHover={this.handleCellClick}
            />
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

export default connect(
  state => ({cells: state.grid.get('cells').toJS()}),
  {initGrid, startLife, addCellLife}
)(Grid)
