import Card from "../base-card"

export type EmptyCardType = {
  text?: string
}

const EmptyCard = ({ text = 'No data.'}: EmptyCardType) => (
  <Card>
    {text}
  </Card>
)

export default EmptyCard