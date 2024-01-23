import Card from "@/components/ui/cards/base-card"
import EmptyCard from "@/components/ui/cards/empty-card"

export type AlbumsCardType = {
  data?: []
}
const AlbumsCard = ({ data }: AlbumsCardType) => {
if (!data?.length) {
  return <EmptyCard text="No results found" />
}

return (
<Card>
  {/* // TODO: integrate data here */}
  Albums
</Card>
)

}

export default AlbumsCard