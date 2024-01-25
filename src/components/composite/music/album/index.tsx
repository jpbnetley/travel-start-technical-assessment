import Image from 'next/image'
import styles from './styles.module.css'

export type AlbumType = {
  id: number,
  title: string,
  imageUrl?: string
  releaseDate: string,
  recordType: string,
}
const Album = ({ 
    title,
    imageUrl,
    releaseDate,
    recordType,
    }: AlbumType) =>  (
  <div className={styles['album-row']}>
    {imageUrl && 
    <Image 
      src={imageUrl}
      width={300}
      height={200}
      loading='lazy'
      alt={`${title} album cover`}
      style={{objectFit: 'contain'}}
      className={styles['cover-image']}
    />
    }
    <div className={styles['album-content']}>
      <label>Title: {title}</label>
      <label>RecordType: {recordType}</label>
      <label>ReleaseDate: {new Date(releaseDate).toLocaleDateString()}</label>
    </div>
  </div>
)

export default Album