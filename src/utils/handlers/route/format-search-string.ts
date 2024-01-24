import { SearchType } from "@/types/models/api/search-config"

const formatSearchString = (query: string, searchType?: SearchType) => {
    const searchString = searchType 
    ? `${searchType}:"${query}"`
    : query

    return searchString
}

export default formatSearchString