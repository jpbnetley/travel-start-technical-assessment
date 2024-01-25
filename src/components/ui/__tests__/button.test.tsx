import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest'

import Button from '../button';

describe('Button', () => {
  it('contains default text', async () => {
    render(<Button testId='test'>Submit</Button>);

    const button = await screen.findByTestId('test')

    expect(button.textContent).toBe('Submit')
  })
});