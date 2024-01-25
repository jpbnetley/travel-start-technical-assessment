import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest'

import EmptyCard from '../cards/empty-card';

describe('EmptyCard', () => {
  it('default empty text is correct', async () => {
    render(<EmptyCard testId='test' />);

    const card = await screen.findByTestId('test')

    expect(card.textContent).toBe('No data.')
  })

  it('contains custom text that is correct', async () => {
    render(<EmptyCard testId='test' text='custom empty text'/>);

    const card = await screen.findByTestId('test')

    expect(card.textContent).toBe('custom empty text')
  })
})