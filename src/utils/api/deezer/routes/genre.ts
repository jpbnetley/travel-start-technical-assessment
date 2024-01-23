import { Genre } from "@/types/models/deezer/genre"
import fetchResponseHandler from "@/utils/handlers/fetch-response-handler"
import { buildIdRoute } from "@/utils/handlers/route/build-id-route"

export const genre =async (id: number, config: Request) => {
  const url = `${buildIdRoute('genre')}/${id}`
  return await fetchResponseHandler<Genre>(url, config)
}