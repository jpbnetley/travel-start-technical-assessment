/**
 * makes api requests and throws an error if the api response is not OK
 * @param input for the api fetcher
 * @param config used to configure fetch request / caching
 * @returns 
 */
const fetchResponseHandler = async <ReturnType>(input: string | URL | Request, config?: RequestInit) => {
  const response = await fetch(input, config)
  if (!response.ok) {
    const {
      status,
      statusText
     } = response
    const errorMessage = `
    url: ${input}
    status: ${status}
    statusText: ${statusText}
    `
    throw new Error(errorMessage, { cause: { root: 'api server', context: 'fetchResponseHandler' } })
  }
  
  const jsonResponse = await response.json()
    
  return jsonResponse as ReturnType
}

export default fetchResponseHandler