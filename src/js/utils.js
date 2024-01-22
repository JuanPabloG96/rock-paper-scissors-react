export function increaseScore ({ actualScore, setActualScore }) {
  setActualScore(actualScore + 1)
}

export function decreaseScore ({ actualScore, setActualScore }) {
  if (actualScore > 0) {
    setActualScore(actualScore - 1)
  }
}
