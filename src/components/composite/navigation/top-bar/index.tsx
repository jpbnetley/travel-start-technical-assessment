import Link from "next/link"
import Button from "@/components/ui/button"
import styles from './styles.module.css'

const TopBar = () => (
  <nav className={styles.nav}>
      <Link href='/' >
        <Button>
          Home page
        </Button>
      </Link>
  </nav>
)

export default TopBar