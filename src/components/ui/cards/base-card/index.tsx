import { ReactNode } from "react"
import styles from './styles.module.css'

export type CardType = {
  children: ReactNode,
  title?: string
}
const Card = ({
  children,
  title
}: CardType) => (
  <div className={styles.card}>
    {title && <h1>{title}</h1>}
    {children}
  </div>
)

export default Card