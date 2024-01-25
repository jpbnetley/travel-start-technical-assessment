import { Children, DOMAttributes, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'

export type ButtonType = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'> & {
  type?: 'button' | 'submit',
  variant?: 'error'
  children: ReactNode
  testId?: string
}

const Button = ({ 
  type= 'button',
  variant,
  testId,
  children,
  ...otherProps 
  }: ButtonType) =>  (
    <button 
      type={type}
      className={`${styles.main} ${variant && styles[variant]}`}
      {...otherProps}
      data-testid={testId}
    >
      {children}
    </button>
  )


export default Button