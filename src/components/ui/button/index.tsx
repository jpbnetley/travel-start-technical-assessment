import { DOMAttributes } from 'react'
import styles from './styles.module.css'

export type ButtonType = Omit<DOMAttributes<HTMLInputElement>, 'type'> & {
  text?: string,
  type?: 'button' | 'submit'
}
const Button = ({ 
  text = 'Submit', 
  ...otherProps 
  }: ButtonType) =>  (
    <input 
      type="button" 
      value={text} 
      className={styles.main}
      {...otherProps}
    />
  )


export default Button