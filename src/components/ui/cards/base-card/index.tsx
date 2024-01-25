import { ReactNode } from "react"
import styles from './styles.module.css'

export type CardType = {
  children: ReactNode,
  title?: string,
  testId?: string
}
const Card = ({
  children,
  title,
  testId
}: CardType) => (
  <div className={styles.card} data-testid={testId}>
    {title && <h1>{title}</h1>}
    {children}
  </div>
)

export default Card