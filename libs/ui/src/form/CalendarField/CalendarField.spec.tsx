import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { CalendarField } from './CalendarField';

const mockCalendar = [
  {
    month: 'January',
    days: [
      { day: 20, availableTime: ['10:00', '12:00'] },
      { day: 21, availableTime: ['14:00'] },
    ],
  },
];

describe('CalendarField', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-01-01'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders correctly with month label', () => {
    render(<CalendarField calendar={mockCalendar} onChange={jest.fn()} />);
    expect(screen.getByText('January')).toBeInTheDocument();
  });

  it('calls onChange when a valid day is clicked', () => {
    const handleChange = jest.fn();
    render(<CalendarField calendar={mockCalendar} onChange={handleChange} />);

    // Тепер 20-те число не disabled, бо сьогодні 1-ше січня
    const dayButton = screen.getByText('20');
    fireEvent.click(dayButton);

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        month: 'January',
        day: 20,
      })
    );
  });

  it('shows time slots after selecting a day', () => {
    render(<CalendarField calendar={mockCalendar} onChange={jest.fn()} />);

    fireEvent.click(screen.getByText('20'));

    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByText('12:00')).toBeInTheDocument();
  });

  it('calls onChange with time when a slot is clicked', () => {
    const handleChange = jest.fn();
    render(<CalendarField calendar={mockCalendar} onChange={handleChange} />);

    fireEvent.click(screen.getByText('20'));
    fireEvent.click(screen.getByText('10:00'));

    expect(handleChange).toHaveBeenCalledWith({
      month: 'January',
      day: 20,
      time: '10:00',
    });
  });
});
