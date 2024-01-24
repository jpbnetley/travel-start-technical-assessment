import qs from "qs"

export const queryStringBuilder = <QueryObject extends Record<string, any>>(urlObject: QueryObject) => {
  const paramsString = qs.stringify(
    urlObject,
  {
    skipNulls: true,
    // https://github.com/ljharb/qs?tab=readme-ov-file#rfc-3986-and-rfc-1738-space-encoding
    format : 'RFC1738' 
  })

  return paramsString && `?${paramsString}`
}