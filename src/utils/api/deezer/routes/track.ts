import { Track } from "@/types/models/deezer/track"
import fetchResponseHandler from "@/utils/handlers/fetch-response-handler"
import { buildIdRoute } from "@/utils/handlers/route/build-id-route"

export const track =async (id: number | string, config: Request) => {
  const url = `${buildIdRoute('artist')}/${id}`
  return await fetchResponseHandler<Track>(url, config)
}