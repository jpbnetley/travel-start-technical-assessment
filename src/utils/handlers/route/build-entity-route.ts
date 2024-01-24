import { DEEZER_BASE_URL } from "@/constants/deezer";

/**
 * adds the entity to the deezer base pathq
 * @param entity that gets added in the path segment
 * @returns 
 */
export const buildEntityRoute = (entity: string) => `${DEEZER_BASE_URL}/${entity}`
