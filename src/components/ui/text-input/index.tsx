import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styles from './styles..module.css'

export type TextInputType = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | 'className'> & {
  type?: 'text' | 'search'
}

const TextInput = ({
  type = 'text',
   ...otherProps
  }: TextInputType) => (
  <input 
    type={type}
    placeholder='Search here'
    className={styles.main}
    {...otherProps}
  />
)

export default TextInput