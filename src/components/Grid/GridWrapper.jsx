import PropTypes from 'prop-types'
import styled from 'styled-components'

const GridWrapper = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  width: ${({size, cellSize}) => size * cellSize + 2}px;
`

GridWrapper.propTypes = {
  cellSize: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
}

export default GridWrapper
