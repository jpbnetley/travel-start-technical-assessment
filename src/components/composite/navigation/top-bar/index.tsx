import Button from "@/components/ui/button"
import Link from "next/link"
import styles from './styles.module.css'

const TopBar = () => (
  <nav className={styles.nav}>
      <Link href='/' >
        <Button value='Home page' />
      </Link>
  </nav>
)

export default TopBar