import { render, screen } from '@testing-library/react';
import { PlaceFeedback } from './PlaceFeedback';

const mockFeedback = {
  id: 'f1',
  rating: 5,
  text: 'The view was spectacular and the service was top notch.',
  createdAt: 243342342,
  user: {
    id: 'sth',
    name: 'Nazariy Holovach',
    avatar: '/avatars/naz.jpg',
    city: 'Lviv',
    country: 'Ukraine',
  },
};

describe('PlaceFeedback', () => {
  it('renders correctly with all user data', () => {
    render(<PlaceFeedback feedback={mockFeedback} />);

    expect(screen.getByText('Nazariy Holovach')).toBeInTheDocument();
    expect(screen.getByText(/Lviv, Ukraine/i)).toBeInTheDocument();
    expect(screen.getByText(mockFeedback.text)).toBeInTheDocument();
  });

  it('contains the rating component with correct value', () => {
    render(<PlaceFeedback feedback={mockFeedback} />);
    expect(screen.getByText('5.0')).toBeInTheDocument();
  });

  it('renders user avatar with correct alt text', () => {
    render(<PlaceFeedback feedback={mockFeedback} />);
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('alt', 'Nazariy Holovach');
  });
});
