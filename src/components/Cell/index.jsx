import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CellContent = styled.div.attrs({
  style: props => ({
    height: `${props.size}px`,
    width: `${props.size}px`,
    backgroundColor: (props.isActive ? '#222' : null)
  })
})`
  border: 1px solid #ddd;
  transition: background-color 100ms ease-in-out;
`

class Cell extends Component {
  handleCellHover = () => this.props.onCellHover(this.props.row, this.props.col)

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
  onCellHover: PropTypes.func.isRequired
}

export default Cell
