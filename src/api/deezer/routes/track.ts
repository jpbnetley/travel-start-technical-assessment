import { Track } from "@/types/models/deezer/track"
import fetchResponseHandler from "@/utils/handlers/fetch-response-handler"
import { buildEntityRoute } from "@/utils/handlers/route/build-entity-route"

export const track =async (id: number | string, config: Request) => {
  const url = `${buildEntityRoute('artist')}/${id}`
  return await fetchResponseHandler<Track>(url, config)
}
