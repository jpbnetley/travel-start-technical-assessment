import DeezerApi from "@/api/deezer"
import AlbumsCard from "@/components/composite/cards/albums-card"
import { NextUrlParams } from "@/types/models/next-js/url-params"
import normaliseNextSearchParams from "@/utils/handlers/normalize-next-search-params"
import { notFound } from "next/navigation"

export type ArtistPageType = {
  searchParams: NextUrlParams,
  params?: NextUrlParams
}

const ArtistPage = async ({ params }: ArtistPageType) => {
  const id = normaliseNextSearchParams(params?.artistId)
  if (!id) return notFound()
  const artistId = Number.parseInt(id)

  const [artistResponse, albumsResponse] = await  Promise.all([
    DeezerApi.artist.getById(artistId),
    DeezerApi.artist.albums(artistId)
  ])

  return  (
    <>
      <h1>Albums page</h1>
      <h2>Artist: { artistResponse.name }</h2>
      <AlbumsCard initialData={albumsResponse}/>
    </>
  )
}

export default ArtistPage