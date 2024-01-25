import { Album } from "@/types/models/deezer/album"
import { Artist } from "@/types/models/deezer/artist"
import { Track } from "@/types/models/deezer/track"
import fetchResponseHandler from "@/utils/handlers/fetch-response-handler"
import { buildEntityRoute } from "@/utils/handlers/route/build-entity-route"

const BASE_URL = buildEntityRoute('artist')

const getById =async (id: number, config?: Request) => {
  const url = `${BASE_URL}/${id}`
  return await fetchResponseHandler<Artist>(url, config)
}

const top = async (id: number, config?: Request) => {
  const url = `${BASE_URL}/${id}/top`
  return await fetchResponseHandler<Artist>(url, config)
}

const albums = async (id: number, config?: Request) => {
  const url = `${BASE_URL}/${id}/albums`
  return await fetchResponseHandler<SuccessResponse<Album[]>>(url, config)
}

const related = async (id: number, config?: Request) => {
  const url = `${BASE_URL}/${id}/related`
  return await fetchResponseHandler<Artist[]>(url, config)
}

const radio = async (id: number, config?: Request) => {
  const url = `${BASE_URL}/${id}/radio`
  return await fetchResponseHandler<Track[]>(url, config)
}

const artistApi = {
  getById,
  top,
  albums,
  related,
  radio
}
export default artistApi