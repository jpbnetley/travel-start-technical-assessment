import Card from "@/components/ui/cards/base-card"
import EmptyCard from "@/components/ui/cards/empty-card"

export type TracksCardType = {
  data?: []
}
const TracksCard = ({ data }: TracksCardType) => {
if (!data?.length) {
  return <EmptyCard text="No results found" />
}

return (
<Card>
  {/* // TODO: integrate data here */}
  Tracks
</Card>
)

}

export default TracksCard