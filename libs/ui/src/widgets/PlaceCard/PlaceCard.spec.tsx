import { render, screen } from '@testing-library/react';
import { PlaceCard } from './PlaceCard';

const mockPlace = {
  id: 'sth',
  title: 'Lviv Opera House',
  city: 'Lviv',
  poster: '/opera.jpg',
  rating: 4.9,
  badges: ['hot', 'top'],
};

describe('PlaceCard', () => {
  it('renders place details correctly', () => {
    render(<PlaceCard place={mockPlace} />);
    expect(screen.getByText('Lviv Opera House')).toBeInTheDocument();
    expect(screen.getByText('Lviv')).toBeInTheDocument();
    expect(screen.getByText('4.9')).toBeInTheDocument();
  });

  it('renders correct badges with labels', () => {
    render(<PlaceCard place={mockPlace} />);
    expect(screen.getByText('Hot')).toBeInTheDocument();
    expect(screen.getByText('Top')).toBeInTheDocument();
  });

  it('handles empty badges array', () => {
    const noBadgePlace = { ...mockPlace, badges: [] };
    const { container } = render(<PlaceCard place={noBadgePlace} />);
    const badgesContainer = container.querySelector('.placeCard__badges');
    expect(badgesContainer).not.toBeInTheDocument();
  });
});
