'use client'

import Button from "@/components/ui/button"
import styles from './styles.module.css'
import Link from "next/link"

export type ErrorMessageType = {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorMessage = ({error, reset}: ErrorMessageType) => {

  return (
    <div className={styles['error-body']}>
        <h2>Something went wrong!</h2>
          
        {error && 
          <p>
            {error?.message}
          </p>}

        <Button
          onClick={() => reset()}
          variant='error'
        >
          Retry 
        </Button>

        <Button
          onClick={() => reset()}
        >
          <Link className={styles.link} href='/'>
            Back to home 
          </Link>
        </Button>
      </div>
  )
}

export default ErrorMessage