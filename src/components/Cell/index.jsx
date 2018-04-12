import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CellContent = styled.div`
  height: ${({size}) => size}px;
  width: ${({size}) => size}px;
  border: 1px solid #ddd;
  background-color: ${({isActive}) => isActive ? '#222' : 'none'};
  transition: background-color 100ms ease-in-out;
`

class Cell extends Component {
  handleCellHover = () => this.props.onCellClick(this.props.row, this.props.col)

  render () {
    return (
      <div onMouseOver={this.handleCellHover}>
        <CellContent {...this.props} />
      </div>
    )
  }
}

Cell.propTypes = {
  isActive: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  onCellClick: PropTypes.func.isRequired
}

export default Cell
