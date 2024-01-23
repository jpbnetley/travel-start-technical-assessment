import styles from './styles..module.css'

export type TextInputType = {
  
}
const TextInput = () => (
  <input 
  type="text" 
  placeholder='Search here'
  className={styles.main}
  />
)

export default TextInput