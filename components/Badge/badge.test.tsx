import { render } from '@testing-library/react'
import Badge from '.'

describe('Test Badge Component', () => {
  it('should show text according to pass props', () => {
    const props = { title: 'Get Started' }
    const { getByText }  = render(<Badge {...props} />)
    expect(getByText(/Get Started/)).toBeInTheDocument()
  })
})