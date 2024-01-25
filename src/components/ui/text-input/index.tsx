import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styles from './styles..module.css'

export type TextInputType = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | 'className'> & {
  type?: 'text' | 'search'
  testId?: string
}

const TextInput = ({
  type = 'text',
  testId,
   ...otherProps
  }: TextInputType) => (
  <input 
    type={type}
    placeholder='Search here'
    className={styles.main}
    {...otherProps}
    data-testid={testId}
  />
)

export default TextInput