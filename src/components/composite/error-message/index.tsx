import Button from "@/components/ui/button"
import styles from './styles.module.css'

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
      </div>
  )
}

export default ErrorMessage