import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingCard } from './BookingCard';

const mockBooking = {
  id: '1',
  title: 'Morning Yoga Session',
  time: new Date('2026-05-20T10:30:00').getTime(),
};

describe('BookingCard', () => {
  it('renders booking info correctly', () => {
    render(<BookingCard booking={mockBooking} />);

    expect(screen.getByText('Morning Yoga Session')).toBeInTheDocument();
    expect(screen.getByText(/20.05.2026 10:30/)).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', async () => {
    const user = userEvent.setup();
    const onDelete = jest.fn();

    render(<BookingCard booking={mockBooking} onDelete={onDelete} />);

    const deleteBtn = screen.getByRole('button', { name: /delete booking/i });
    await user.click(deleteBtn);

    expect(onDelete).toHaveBeenCalledWith('1');
  });

  it('renders delete button with correct accessibility attributes', () => {
    render(<BookingCard booking={mockBooking} />);

    const deleteBtn = screen.getByRole('button', { name: /delete booking/i });
    expect(deleteBtn).toHaveAttribute('type', 'button');
    expect(deleteBtn).toBeEnabled();
  });
});
