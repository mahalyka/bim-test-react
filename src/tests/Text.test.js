import React from 'react'
import Autocomplete from '../components/Autocomplete'
import { render } from '@testing-library/react'

test('renders text component correctly', () => {
  const div = document.createElement('div')
  render(<Autocomplete />, div)
})
