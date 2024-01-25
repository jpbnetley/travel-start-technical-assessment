/**
 * converts seconds to time duration @example 00:00:00
 * @param seconds that should get converted
 * @returns formatted time string @example 00:00:00
 */
const secondsToDuration = (seconds: number) => {
  return new Date(seconds * 1000)
  .toISOString()
  .slice(11, 19)
}

export default secondsToDuration