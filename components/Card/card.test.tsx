import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from '.'

describe('Test Card Component', () => {
  const props = {
    title: 'Naruto',
    image: 'https://Naruto.jpg',
    onClick: jest.fn(),
    onBtnAction: jest.fn(),
    actionType: 'delete'
  }
  it('Should show title "Naruto"', () => {
    const { getByText } = render(<Card {...props} />)
    expect(getByText(/Naruto/)).toBeInTheDocument()
  })
  it('Should cover action card', () => {
    const { getByTestId } = render(<Card {...props} />)
    const cardAction = getByTestId('card-action')
    userEvent.click(cardAction)
  })
})