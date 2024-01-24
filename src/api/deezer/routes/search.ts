import qs from 'qs'
import { DEEZER_BASE_URL } from "@/constants/deezer"
import { DeezerSearchResponse } from '@/types/models/deezer/search'
import fetchResponseHandler from '@/utils/handlers/fetch-response-handler'
import { Album } from '@/types/models/deezer/album'
import { queryStringBuilder } from '@/utils/handlers/query-string-builder'
import { SearchConfig } from '@/types/models/api/search-config'
import formatSearchString from '@/utils/handlers/route/format-search-string'
import { Track } from '@/types/models/deezer/track'
import { Artist } from '@/types/models/deezer/artist'

export const URL = `${DEEZER_BASE_URL}/search`

export type Config = {
  searchConfig?: SearchConfig,
  fetchConfig?: RequestInit
}

const globalSearch = async (query: string, config?: Config ) => {
  const { 
    fetchConfig, 
    searchConfig
  } = config ?? {}

  const {
    searchType,
    ...restOfSearchConfig
  } = searchConfig ?? {}
  

 const searchString = formatSearchString(query, searchType)

  const queryString = queryStringBuilder({
    q: searchString,
    ...restOfSearchConfig
  })

 
  return await fetchResponseHandler<SuccessResponse<DeezerSearchResponse[]>>(`${URL}${queryString}'`, fetchConfig)
}

const album = async (searchString?: string, fetchConfig?: RequestInit ) => {
  const queryString = queryStringBuilder({
    q: searchString,
  })

 return await fetchResponseHandler<SuccessResponse<Album[]>>(`${URL}/album/${queryString}`, fetchConfig)
}

const artist = async (searchString?: string, fetchConfig?: RequestInit ) => {
  const queryString = queryStringBuilder({
    q: searchString,
  })

 return await fetchResponseHandler<SuccessResponse<Artist[]>>(`${URL}/artist/${queryString}`, fetchConfig)
}

const track = async (searchString?: string, fetchConfig?: RequestInit ) => {
  const queryString = queryStringBuilder({
    q: searchString,
  })

 return await fetchResponseHandler<SuccessResponse<Track[]>>(`${URL}/track/${queryString}`, fetchConfig)
}

const searchApi = {
  globalSearch,
  album,
  artist,
  track
}

export default searchApi