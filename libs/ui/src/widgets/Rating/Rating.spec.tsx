import { render, screen } from '@testing-library/react';
import { Rating } from './Rating';

describe('Rating', () => {
  it('formats integer rating to one decimal place', () => {
    render(<Rating>4</Rating>);
    expect(screen.getByText('4.0')).toBeInTheDocument();
  });

  it('formats float rating correctly', () => {
    render(<Rating>4.76</Rating>);
    expect(screen.getByText('4.8')).toBeInTheDocument();
  });

  it('handles invalid input by displaying 0.0', () => {
    render(<Rating>not-a-number</Rating>);
    expect(screen.getByText('0.0')).toBeInTheDocument();
  });

  it('renders star icon', () => {
    const { container } = render(<Rating>5</Rating>);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });
});
