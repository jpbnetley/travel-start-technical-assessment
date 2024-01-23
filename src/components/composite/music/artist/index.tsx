import Link from "next/link"
import styles from './styles.module.css'

// TODO: implement Artist
export type ArtistType = {
  name: string,
  id: number
}
const Artist = ({ name, id, }: ArtistType) => (
    <div className={styles['artist-row']}>
    
      <label>
        name: {name}
      </label>
     
    </div>
  )
export default Artist