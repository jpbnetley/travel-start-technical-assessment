import { Children, DOMAttributes, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'

export type ButtonType = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'> & {
  type?: 'button' | 'submit',
  variant?: 'error'
  children: ReactNode
}

const Button = ({ 
  type= 'button',
  variant,
  children,
  ...otherProps 
  }: ButtonType) =>  (
    <button 
      type={type}
      className={`${styles.main} ${variant && styles[variant]}`}
      {...otherProps}
    >
      {children}
    </button>
  )


export default Button