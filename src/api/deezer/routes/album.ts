import { Album } from "@/types/models/deezer/album"
import { Track } from "@/types/models/deezer/track"
import fetchResponseHandler from "@/utils/handlers/fetch-response-handler"
import { buildEntityRoute } from "@/utils/handlers/route/build-entity-route"

const URL = buildEntityRoute('album')

const getById = async (id: number, config?: Request) => {
  const url = `${URL}/${id}`
  return await fetchResponseHandler<Album>(url, config)
}

const tracks = async (id: number, config?: Request) => {
  const url = `${URL}/${id}/tracks`
  return await fetchResponseHandler<SuccessResponse<Track[]>>(url, config)
}

const albumApi = {
  getById,
  tracks
}

export default albumApi