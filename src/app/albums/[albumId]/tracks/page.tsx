import { notFound } from "next/navigation"
import DeezerApi from "@/api/deezer"
import TracksCard from "@/components/composite/cards/tracks-card"
import { NextUrlParams } from "@/types/models/next-js/url-params"
import normaliseNextSearchParams from "@/utils/handlers/normalize-next-search-params"
import { getTrackDetails } from "@/utils/get-data/server/albums"

export type ArtistPageType = {
  searchParams: NextUrlParams,
  params?: NextUrlParams
}

const ArtistPage = async (props: ArtistPageType) => {
  const params = await props.params;
  const id = normaliseNextSearchParams(params?.albumId)
  if (!id) return notFound()
  const albumId = Number.parseInt(id)

  const { albumResponse, tracksResponse } = await getTrackDetails(albumId)

  return  (
    <>
      <h1>Album Track page</h1>
      <h2>Artist: {albumResponse.artist.name}</h2>
      <h2>Album: { albumResponse.title }</h2>
      <TracksCard initialData={tracksResponse}/>
    </>
  )
}

export default ArtistPage