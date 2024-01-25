"use server"

import DeezerApi from "@/api/deezer"
import { error } from "console"

/**
 * fetches album details by artistId for the albums page
 * @param artistId the artistId
 * @returns 
 */
export const getAlbumDetails = async (artistId: number) => {
  try {
    const [artistResponse, albumsResponse] = await Promise.all([
      DeezerApi.artist.getById(artistId),
      DeezerApi.artist.albums(artistId)
    ])

    return {
      artistResponse,
      albumsResponse
    }
    
  } catch (error) {
    console.error(error)
    throw new Error('Failed so fetch album details')
  }
}

export const getTrackDetails = async (albumId: number) => {
  try {
    const [albumResponse, tracksResponse] = await  Promise.all([
      DeezerApi.album.getById(albumId),
      DeezerApi.album.tracks(albumId)
    ])

    return {
      albumResponse,
      tracksResponse
    }
    
  } catch (error) {
    console.error(error)
    throw new Error('Failed so fetch album track details')
  }
}