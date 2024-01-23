import { Album } from "@/types/models/deezer/album"
import fetchResponseHandler from "@/utils/handlers/fetch-response-handler"
import { buildIdRoute } from "@/utils/handlers/route/build-id-route"

export const album =async (id: number | string, config: Request) => {
  const url = `${buildIdRoute('artist')}/${id}`
  return await fetchResponseHandler<Album>(url, config)
}