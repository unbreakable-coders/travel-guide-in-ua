import { render, screen } from '@testing-library/react';
import { AppFeedback } from './AppFeedback';

const mockFeedback = {
  id: 'uuid',
  rating: 5,
  text: 'This is an amazing service!',
  user: {
    id: 'uuid',
    name: 'Nazariy Holovach',
    avatar: '/avatar.png',
    country: 'Ukraine',
    city: 'Lviv',
  },
};

describe('AppFeedback', () => {
  it('renders user information correctly', () => {
    render(<AppFeedback feedback={mockFeedback} />);

    expect(screen.getByText('Nazariy Holovach')).toBeInTheDocument();
    expect(screen.getByText(/Ukraine \/ Lviv/i)).toBeInTheDocument();
    expect(screen.getByText(mockFeedback.text)).toBeInTheDocument();
  });

  it('renders correct amount of stars', () => {
    const { container } = render(<AppFeedback feedback={mockFeedback} />);
    const stars = container.querySelectorAll('.app-feedback__star');
    expect(stars).toHaveLength(5);
  });

  it('contains an optimized image with correct alt text', () => {
    render(<AppFeedback feedback={mockFeedback} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Nazariy Holovach');
  });
});
