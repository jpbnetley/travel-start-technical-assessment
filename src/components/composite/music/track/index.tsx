import secondsToDuration from '@/utils/formatters/seconds-to-duration'
import styles from './styles.module.css'

export type TrackType = {
  id: number,
  title: string,
  duration: number, 
  releaseDate: string, 
  preview: string
}

const Track = ({
  title,
  duration,
  preview,
  releaseDate
}: TrackType) => {

  const convertedDuration = secondsToDuration(duration)
  
  return (
    <div className={styles['track-row']}>
      <label>Title: {title}</label>
      <label>Release date: {new Date(releaseDate).toDateString()}</label>
      <label>Duration: {convertedDuration}</label>
      
      <audio controls>
        <source src={preview} />
        Your browser does not support the audio element.
    </audio>

    </div>
  )
  }

export default Track