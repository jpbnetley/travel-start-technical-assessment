import DeezerApi from "@/utils/api/deezer"
import { Config } from '@/utils/api/deezer/routes/search'

export const search = async (search?: string, config?: Config) => {
  "use server"
  try {
    return await DeezerApi.search(search, config)
    
  } catch (error) {
    console.error(error)
    return undefined
  }
}