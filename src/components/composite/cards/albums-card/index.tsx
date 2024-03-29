import dynamic from "next/dynamic"
import Link from "next/link"
import { Album as AlbumType } from "@/types/models/deezer/album"
import Album from "../../music/album"

const EmptyCard = dynamic(() => import("@/components/ui/cards/empty-card"))
const Card = dynamic(() => import("@/components/ui/cards/base-card"))

export type AlbumsCardType = {
  initialData?: SuccessResponse<AlbumType[]>
}

const AlbumsCard = ({ initialData }: AlbumsCardType) => {
  const {
    data
  } = initialData ?? {}

  if (!data?.length) {
    return <EmptyCard text="No results found" />
  }

  return (
  <Card>
    {data.map(({  id, title, cover_medium, release_date, record_type }) => 
      <Link 
        href={`/albums/${id}/tracks`}
        className={'row'}
        key={id}
      >
        <Album 
          id={id}
          title={title} 
          key={id} 
          imageUrl={cover_medium}
          releaseDate={release_date}
          recordType={record_type}
        />    
       </Link>
    )}
  </Card>
  )

}

export default AlbumsCard