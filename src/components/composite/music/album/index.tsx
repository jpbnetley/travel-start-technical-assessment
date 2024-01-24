import styles from './styles.module.css'
// TODO: implement Album view
export type AlbumType = {
  id: number,
  title: string
}
const Album = ({ title }: AlbumType) => (
  <div className={styles['album-row']}>
    <label>{title}</label>
  </div>
)

export default Album