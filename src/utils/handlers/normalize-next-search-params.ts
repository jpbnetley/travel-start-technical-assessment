const normaliseNextSearchParams = ( searchParams: string | string[] | undefined): string | undefined => {
 const param =  Array.isArray(searchParams) 
  ? searchParams.join(',')
  : searchParams

 return param
}

export default normaliseNextSearchParams