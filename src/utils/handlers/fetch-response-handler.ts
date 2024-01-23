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
    throw new Error(errorMessage, { cause: 'api server' })
  }
  
  const jsonResponse = await response.json()
    
  return jsonResponse as ReturnType
}

export default fetchResponseHandler