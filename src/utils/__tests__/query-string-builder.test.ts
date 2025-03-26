import { queryStringBuilder } from '../handlers/query-string-builder'
import { expect, describe, it } from 'vitest'

describe('test query string builder', () => {
  const data = {
    name: 'jackie',
    surname: 'chan',
    age: '45',
    alive: 'true'
  }
  it('should create a string from an object with values', () => {
    const response = queryStringBuilder(data)
    expect(response).toBe(
      '?name=jackie&surname=chan&age=45&alive=true'
    )
  })

  it('should work with an empty object', () => {
    const response = queryStringBuilder({})
    expect(response).toBe('')
  })
})
