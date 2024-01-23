import Card from "@/components/ui/cards/base-card"
import EmptyCard from "@/components/ui/cards/empty-card"
import { DeezerSearchResponse } from "@/types/models/deezer/search"
import styles from './styles.module.css'
import Artist from "../../music/artist"
import Link from "next/link"

export type ArtistsCardType = {
  initialResponse?: SuccessResponse<DeezerSearchResponse[]>
}
const ArtistsCard = ({ initialResponse }: ArtistsCardType) => {
  if (!initialResponse || !initialResponse?.data?.length) {
    return <EmptyCard text="No results found"/>
  }

  const {
    data
  } = initialResponse

  return (
  <Card title="Artists">
    {/* // TODO: integrate data here */ }
      {data.map(({ artist,  id }) => 
      <Link 
        href={`/artists/${id}`}
        className={styles.link}
        key={id}
      >
      <Artist 
        id={artist.id}
        name={artist.name} 
        key={id} 
       />    
       </Link>
    )}
    
  </Card>
  )
}

export default ArtistsCard