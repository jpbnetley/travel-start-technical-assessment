"use server"

import DeezerApi from "@/api/deezer"

/**
 * searches artists by search phrase
 * @param search search text
 * @returns 
 */
export const search = async (search: string) => {
  try {
    return await DeezerApi.search.artist(search)
  } catch (error) {
    console.error(error)
    throw new Error('Failed so search for artists')
  }
}
