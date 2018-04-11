import React from 'react'
import PropTypes from 'prop-types'
import range from 'lodash-es/range'
import styled from 'styled-components'
import Cell from '../Cell'

const GridWrapper = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.size * 20 + 2}px;
`

function Grid ({size}) {
  const grid = range(0, size * size)
  return (
    <GridWrapper size={size}>
      {grid.map(item => <Cell key={item} isActive={true}/>)}
    </GridWrapper>
  )
}

Grid.propTypes = {
  size: PropTypes.number.isRequired
}

export default Grid
