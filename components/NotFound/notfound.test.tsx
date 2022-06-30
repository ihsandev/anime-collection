import { render } from '@testing-library/react'
import NotFound from '.'

describe('Test NotFound Component', () => {
  it('should show text "Data Not Found"', () => {
    const { getByText }  = render(<NotFound />)
    expect(getByText(/Data Not Found/)).toBeInTheDocument()
  })
})