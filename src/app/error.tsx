'use client'
 
import { useEffect } from 'react'
import styles from './page.module.css'
import Button from '@/components/ui/button'
import ErrorMessage from '@/components/composite/error-message'

export type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className={styles.main}>
      <ErrorMessage error={error} reset={reset} />
    </div>
  )
}