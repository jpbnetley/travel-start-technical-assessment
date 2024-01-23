'use client'

import ArtistsCard from "@/components/composite/cards/artists-card"
import Search from "@/components/composite/search"
import { useSearchParams } from "next/navigation"

const ARTIST_SEARCH_NAME = 'artistSearch'


const ArtistSearch = () => {

  const pageSearchParams = useSearchParams()
  const searchText = pageSearchParams.get('artistSearch') ?? undefined

return (
  <search>
    <form>
      <Search name={ARTIST_SEARCH_NAME} searchText={searchText} />
      <ArtistsCard />
    </form>
  </search>
 )
}

export default ArtistSearch