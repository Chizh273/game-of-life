import PropTypes from 'prop-types'
import styled from 'styled-components'

const Cell = styled.div`
  height: ${({size}) => size}px;
  width: ${({size}) => size}px;
  border: 1px solid #ddd;
  background-color: ${({isActive}) => isActive ? '#222': 'none'};
  transition: background-color 100ms ease-in-out;
`

Cell.propTypes = {
  isActive: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired
}

export default Cell
