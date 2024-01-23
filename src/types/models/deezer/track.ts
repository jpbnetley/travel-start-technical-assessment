// https://developers.deezer.com/api/track

import { ExplicitContentLyrics } from "@/types/enums/explicit-content-lyrics"
import { ExplicitContentCover } from "@/types/enums/explicit-content-cover"
import { Album } from "./album"
import { Artist } from "./artist"

export type Track = {
  id: number,
  readable: boolean,
  title: string,
  title_short: string,
  title_version: string,
  unseen: boolean,
  isrc: string,
  link: string,
  share: string,
  duration: number,
  track_position: number,
  disk_number: number,
  rank: number,
  release_date: Date,
  explicit_lyrics: ExplicitContentLyrics,
  explicit_content_lyrics: number,
  explicit_content_cover: ExplicitContentCover,
  preview: string,
  bpm: number,
  gain: number,
  available_countries: string[],
  alternative?: Track,
  contributors?: string,
  md5_image: string,
  artist: Artist,
  album: Pick<Album, 'id' | 'title' | 'link' | 'cover' | 'cover_small' | 'cover_medium' | 'cover_big' | 'cover_xl' | 'release_date'>
}