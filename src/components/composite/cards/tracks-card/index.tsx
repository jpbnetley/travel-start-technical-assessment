import dynamic from "next/dynamic"
import Track from "@/components/composite/music/track"
import { Track as TrackType } from "@/types/models/deezer/track"

const EmptyCard = dynamic(() => import("@/components/ui/cards/empty-card"))
const Card = dynamic(() => import("@/components/ui/cards/base-card"))

export type TracksCardType = {
  initialData?: SuccessResponse<TrackType[]>
}
const TracksCard = ({ initialData }: TracksCardType) => {
  const {
    data
  } = initialData ?? {}
  
if (!data?.length) {
  return <EmptyCard text="No results found" />
}

return (
  <Card>
    {data.map(({ id, title, duration, release_date, preview }) => (
      <Track 
        key={id} 
        title={title} 
        id={id}
        duration={duration}
        releaseDate={release_date}
        preview={preview}
      />
    ))}
  </Card>
)

}

export default TracksCard