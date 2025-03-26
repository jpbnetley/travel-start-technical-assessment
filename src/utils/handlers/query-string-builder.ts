/**
 * builds query string from an object
 * @param urlObject that is used to build the query string from
 * @returns query string
 */
export const queryStringBuilder = <QueryObject extends Record<string, string | undefined>>(urlObject: QueryObject) => {
  const nonEmptyObject = Object(urlObject)
  const params = new URLSearchParams(nonEmptyObject)
  const paramsString =  params.toString()
  return paramsString && `?${paramsString}`
}