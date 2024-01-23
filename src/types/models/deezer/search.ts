// https://developers.deezer.com/api/search

import { Album } from "./album"
import { Artist } from "./artist"

export type DeezerSearchResponse = {
  id: number,
  readable: boolean,
  title: string,
  title_short: string,
  title_version: string,
  link: string,
  duration: number,
  rank: number
  explicit_lyrics: boolean,
  preview?: string
  artist: Pick<Artist, 'id' | 'name'>
  album: Pick<Album, 'id' | 'title' | 'cover' | 'cover_small' | 'cover_medium' | 'cover_big' | 'cover_xl'>
}
