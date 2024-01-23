import { DOMAttributes, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styles from './styles.module.css'

export type ButtonType = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className'> & {
  type?: 'button' | 'submit'
}

const Button = ({ 
  type= 'button',
  ...otherProps 
  }: ButtonType) =>  (
    <input 
      type={type}
      className={styles.main}
      {...otherProps}
    />
  )


export default Button