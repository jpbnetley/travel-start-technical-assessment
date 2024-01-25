"use server"

import DeezerApi from "@/api/deezer"

export const search = async (search: string) => {
  try {
    return await DeezerApi.search.artist(search)
    
  } catch (error) {
    console.error(error)
    return undefined
  }
}