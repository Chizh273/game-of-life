import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CellWrapper = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid #ddd;
  background-color: ${props => props.isActive ? 'red': 'none'};
`

function Cell ({isActive}) {
  return <CellWrapper isActive={isActive}/>
}

Cell.propTypes = {
  isActive: PropTypes.bool.isRequired
}

export default Cell
