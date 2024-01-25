/**
 * converts complex query param type to string
 * @param searchParams that should get converted
 * @returns query param as string
 */
const normaliseNextSearchParams = ( searchParams: string | string[] | undefined): string | undefined => {
 const param =  Array.isArray(searchParams) 
  ? searchParams.join(',')
  : searchParams

 return param
}

export default normaliseNextSearchParams