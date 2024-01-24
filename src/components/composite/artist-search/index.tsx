'use client'

import ArtistsCard from "@/components/composite/cards/artists-card"
import Search from "@/components/composite/search"
import { Artist } from "@/types/models/deezer/artist"
import { DeezerSearchResponse } from "@/types/models/deezer/search"
import { useSearchParams } from "next/navigation"

export const ARTIST_SEARCH_NAME = 'artistSearch'

export type ArtistSearchType = {
  initialData?: SuccessResponse<Artist[]> 
}
const ArtistSearch = ({ initialData }: ArtistSearchType) => {
  const pageSearchParams = useSearchParams()
  const searchText = pageSearchParams.get(ARTIST_SEARCH_NAME) ?? undefined

  return (
    <search>
      <form>
        <Search 
          name={ARTIST_SEARCH_NAME} 
          searchText={searchText} 
        />
        <ArtistsCard initialResponse={initialData} />
      </form>
    </search>
  )
}

export default ArtistSearch