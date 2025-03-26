import qs from "qs"

/**
 * builds query string from an object
 * @param urlObject that is used to build the query string from
 * @returns query string
 */
export const queryStringBuilder = <QueryObject extends Record<string, string>>(urlObject: QueryObject) => {
  const params = new URLSearchParams(urlObject)
  const paramsString =  params.toString()
  return paramsString && `?${paramsString}`
}