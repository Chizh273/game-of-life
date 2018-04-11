export default (windowSize, gridSize) =>
  Math.floor((windowSize - (windowSize / 10)) / gridSize)
