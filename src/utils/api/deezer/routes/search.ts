import qs from 'qs'
import { DEEZER_BASE_URL } from "@/constants/deezer"
import { DeezerSearchResponse } from '@/types/models/deezer/search'
import fetchResponseHandler from '@/utils/handlers/fetch-response-handler'

export const URL = `${DEEZER_BASE_URL}/search`

export type SearchConfig = {
  strict?: boolean,
  order?: 'RANKING' | 'TRACK_ASC' | 'TRACK_DESC' | 'ARTIST_ASC' | 'ARTIST_DESC' | 'ALBUM_ASC' | 'ALBUM_DESC' | 'RATING_ASC' | 'RATING_DESC' | 'DURATION_ASC' | 'DURATION_DESC'
  searchType?: 'artist' | 'album' | 'track' | 'label' | 'dur_min' | 'dur_max' | 'bpm_min' | 'bpm_max'
}

export type Config = {
  searchConfig?: SearchConfig,
  fetchConfig?: RequestInit
}
export const search = async (query?: string, config?: Config ) => {
  const { 
    fetchConfig, 
    searchConfig
  } = config ?? {}

  const {
    searchType,
    ...restOfSearchConfig
  } = searchConfig ?? {}

  const searchString = searchType 
    ? `${searchType}:"${query}"`
    : query

  const params = qs.stringify({
    ...searchString && { q: searchString },
    ...restOfSearchConfig
  },
  {
    skipNulls: true,
    // https://github.com/ljharb/qs?tab=readme-ov-file#rfc-3986-and-rfc-1738-space-encoding
    format : 'RFC1738' 
  })

  const queryString = params && `?${params}`
  
  return await fetchResponseHandler<SuccessResponse<DeezerSearchResponse[]>>(`${URL}${queryString}'`, fetchConfig)
}