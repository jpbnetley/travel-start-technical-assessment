import Card from "@/components/ui/cards/base-card"
import EmptyCard from "@/components/ui/cards/empty-card"

export type ArtistsCardType = {
  data?: []
}
const ArtistsCard = ({ data }: ArtistsCardType) => {
if (!data?.length) {
  return <EmptyCard text="No results found"/>
}

return (
<Card>
  {/* // TODO: integrate data here */}
  Artists
</Card>
)

}

export default ArtistsCard