import Card from "../base-card"

export const EMPTY_TEXT = 'No data.'

export type EmptyCardType = {
  text?: string
  testId?: string
}

const EmptyCard = ({ text = EMPTY_TEXT, testId }: EmptyCardType) => (
  <Card testId={testId}>
    {text}
  </Card>
)

export default EmptyCard