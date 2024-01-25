
import { expect, test } from 'vitest'
import { buildEntityRoute } from '@/utils/handlers/route/build-entity-route'


test('buildEntityRoute creates correct path', () => {
  const data = 'music'
  const correct = 'https://api.deezer.com/music'
  const result = buildEntityRoute(data)

  expect(result).toBe(correct)
})

