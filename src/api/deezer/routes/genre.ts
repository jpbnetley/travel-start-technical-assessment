import { Genre } from "@/types/models/deezer/genre"
import fetchResponseHandler from "@/utils/handlers/fetch-response-handler"
import { buildEntityRoute } from "@/utils/handlers/route/build-entity-route"

export const genre =async (id: number, config: Request) => {
  const url = `${buildEntityRoute('genre')}/${id}`
  return await fetchResponseHandler<Genre>(url, config)
}