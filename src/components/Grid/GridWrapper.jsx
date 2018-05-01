import PropTypes from 'prop-types'
import styled from 'styled-components'

const GridWrapper = styled.div.attrs({
  style: ({size, cellSize}) => ({
    width: `${size * cellSize + 2}px`
  })
})`
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
`

GridWrapper.propTypes = {
  cellSize: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
}

export default GridWrapper
