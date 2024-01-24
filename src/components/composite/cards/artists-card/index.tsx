import Link from "next/link"
import dynamic from "next/dynamic"
import { DeezerSearchResponse } from "@/types/models/deezer/search"
import Artist from "@/components/composite//music/artist"
import styles from './styles.module.css'

const EmptyCard = dynamic(() => import("@/components/ui/cards/empty-card"))
const Card = dynamic(() => import("@/components/ui/cards/base-card"))

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
      {data.map(({ artist,  id }) => 
      <Link 
        href={`/artists/${id}/albums`}
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