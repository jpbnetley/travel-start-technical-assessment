import dynamic from "next/dynamic"

const EmptyCard = dynamic(() => import("@/components/ui/cards/empty-card"))
const Card = dynamic(() => import("@/components/ui/cards/base-card"))

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