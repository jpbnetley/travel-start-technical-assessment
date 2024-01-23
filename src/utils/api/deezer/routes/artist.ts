import { Artist } from "@/types/models/deezer/artist"
import fetchResponseHandler from "@/utils/handlers/fetch-response-handler"
import { buildIdRoute } from "@/utils/handlers/route/build-id-route"

export const artist =async (id: number, config: Request) => {
  const url = `${buildIdRoute('artist')}/${id}`
  return await fetchResponseHandler<Artist>(url, config)
}