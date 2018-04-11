import React from 'react'
import PropTypes from 'prop-types'
import range from 'lodash-es/range'
import GridWrapper from './GridWrapper'
import Cell from '../Cell'
import calcCellSize from '../../utils/calcCellSize'

function Grid ({size}) {
  const grid = range(0, size * size)
  const cellSize = calcCellSize(
    (window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth),
    size
  )

  return (
    <GridWrapper size={size} cellSize={cellSize}>
      {grid.map(item => <Cell key={item} size={cellSize} isActive={true}/>)}
    </GridWrapper>
  )
}

Grid.propTypes = {
  size: PropTypes.number.isRequired
}

export default Grid
