import Link from "next/link"
import dynamic from "next/dynamic"
import Artist from "@/components/composite//music/artist"
import { Artist as ArtistType} from "@/types/models/deezer/artist"

const EmptyCard = dynamic(() => import("@/components/ui/cards/empty-card"))
const Card = dynamic(() => import("@/components/ui/cards/base-card"))

export type ArtistsCardType = {
  initialResponse?: SuccessResponse<ArtistType[]>
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
      {data.map(({ name,  id }) => 
      <Link 
        href={`/artists/${id}/albums`}
        key={id}
      >
        <Artist 
          id={id}
          name={name} 
          key={id} 
        />    
       </Link>
    )}
  </Card>
  )
}

export default ArtistsCard