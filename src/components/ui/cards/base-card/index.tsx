import { ReactNode } from "react"
import styles from './styles.module.css'

export type CardType = {
  children: ReactNode
}
const Card = ({
  children
}: CardType) => (
  <div className={styles.card}>
    {children}
  </div>
)

export default Card