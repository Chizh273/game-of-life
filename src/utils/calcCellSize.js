export default (windowSize, gridSize, maximum = false) => {
  const res = Math.floor((windowSize - (windowSize / 10)) / gridSize)

  if (maximum && res > maximum) {
    return maximum
  }

  return res
}

