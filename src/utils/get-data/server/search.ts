import DeezerApi from "@/api/deezer"

export const search = async (search: string,) => {
  "use server"
  try {
    return await DeezerApi.search.artist(search)
    
  } catch (error) {
    console.error(error)
    return undefined
  }
}