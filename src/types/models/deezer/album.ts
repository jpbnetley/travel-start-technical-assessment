// https://developers.deezer.com/api/album

import { Artist } from "./artist"
import { Genre } from "./genre"
import { Track } from "./track"

export type Album = {
  id: number,
  title: string,
  upc: string,
  link: string,
  share: string,
  cover: string, // The url of the album's cover. Add 'size' parameter to the url to change size. Can be 'small', 'medium', 'big', 'xl' (ImageSize enum)
  cover_small: string,
  cover_medium: string,
  cover_big: string,
  cover_xl: string,
  md5_image: string,
  genre_id: number
  genres: Genre[],
  label: string,
  nb_tracks: number,
  duration: number,
  fans: number,
  release_date: Date,
  record_type: string,
  available: boolean,
  alternative?: Album,
  tracklist: string,
  explicit_lyrics: boolean,
  explicit_content_lyrics: number,
  explicit_content_cover: number,
  contributors: string[]
  artist: Pick<Artist, 'id' | 'name' | 'picture' | 'picture_small' | 'picture_medium' | 'picture_xl'>
  tracks: Track[]
}