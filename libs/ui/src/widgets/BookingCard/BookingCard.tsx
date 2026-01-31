'use client';

import { useState, useEffect } from 'react';
import { Trash } from '../../icons';
import { Booking } from '@org/models';
import './BookingCard.styles.scss';

interface Props {
  booking: Booking;
  onDelete?: (id: string) => void;
}

export const BookingCard = ({ booking, onDelete }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  return (
    <article className="booking-card">
      <div className="booking-card__header">
        <div className="booking-card__content">
          <h5 className="booking-card__title">{booking.title}</h5>
          <time
            className="booking-card__time"
            dateTime={new Date(booking.time).toISOString()}
          >
            {isMounted ? formatTime(booking.time) : ''}
          </time>
        </div>

        <button
          className="booking-card__delete-button"
          aria-label="Delete booking"
          type="button"
          onClick={() => onDelete?.(booking.id)}
        >
          <Trash className="booking-card__delete-icon" />
        </button>
      </div>
    </article>
  );
};
