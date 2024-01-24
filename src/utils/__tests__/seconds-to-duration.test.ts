
import { expect, test } from 'vitest'
import secondsToDuration from '@/utils/formatters/seconds-to-duration'

test('seconds to duration function converts value correctly', () => {
  const data = 120
  const correct = '00:02:00'
  const result = secondsToDuration(data)

  expect(result).toBe(correct)
})

test('1 hour as seconds gets formatted correctly', () => {
  const data = 3600
  const correct = '01:00:00'
  const result = secondsToDuration(data)

  expect(result).toBe(correct)
})