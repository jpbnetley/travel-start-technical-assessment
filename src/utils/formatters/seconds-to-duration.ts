const secondsToDuration = (seconds: number) => {
  return new Date(seconds * 1000)
  .toISOString()
  .slice(11, 19)
}

export default secondsToDuration