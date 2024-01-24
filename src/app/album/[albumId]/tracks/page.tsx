import DeezerApi from "@/api/deezer"
import AlbumsCard from "@/components/composite/cards/albums-card"
import TracksCard from "@/components/composite/cards/tracks-card"
import { NextUrlParams } from "@/types/models/next-js/url-params"
import normaliseNextSearchParams from "@/utils/handlers/normalize-next-search-params"
import { notFound } from "next/navigation"

export type ArtistPageType = {
  searchParams: NextUrlParams,
  params?: NextUrlParams
}

const ArtistPage = async ({ params }: ArtistPageType) => {
  const id = normaliseNextSearchParams(params?.albumId)
  if (!id) return notFound()
  const albumId = Number.parseInt(id)

  const [albumResponse, tracksResponse] = await  Promise.all([
    DeezerApi.album.getById(albumId),
    DeezerApi.album.tracks(albumId)
  ])

  return  (
    <>
      <h1>Album Track page</h1>
      <h2>Artist: {albumResponse.artist.name}</h2>
      <h2>Album: { albumResponse.title }</h2>
      <TracksCard />
    </>
  )
}

export default ArtistPage