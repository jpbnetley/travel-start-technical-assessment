import Card from "@/components/ui/cards/base-card"
import EmptyCard from "@/components/ui/cards/empty-card"
import { DeezerSearchResponse } from "@/types/models/deezer/search"
import styles from './styles.module.css'

export type ArtistsCardType = {
  initialResponse?: SuccessResponse<DeezerSearchResponse[]>
}
const ArtistsCard = ({ initialResponse }: ArtistsCardType) => {
  if (!initialResponse) {
    return <EmptyCard text="No results found"/>
  }

  const {
    data
  } = initialResponse

  return (
  <Card>
    {/* // TODO: integrate data here */ }
      {data.map(({artist, album, id }) => 
        <div key={id} className={styles['artist-row']}>
            <p>name: {artist.name}</p>
            <p>album: {album.title}</p>
        </div>
    
    )}
  </Card>
  )
}

export default ArtistsCard