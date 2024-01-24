export type SearchConfig = {
  strict?: boolean,
  order?: SearchOrder
  searchType?: SearchType
}

export type SearchType = 'artist' | 'album' | 'track' | 'label' | 'dur_min' | 'dur_max' | 'bpm_min' | 'bpm_max'

export type SearchOrder = 'RANKING' | 'TRACK_ASC' | 'TRACK_DESC' | 'ARTIST_ASC' | 'ARTIST_DESC' | 'ALBUM_ASC' | 'ALBUM_DESC' | 'RATING_ASC' | 'RATING_DESC' | 'DURATION_ASC' | 'DURATION_DESC'