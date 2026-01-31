import { ReactNode } from 'react';
import StarIcon from '../../icons/Star';
import './Rating.styles.scss';

interface Props {
  children: ReactNode;
}

export const Rating = ({ children }: Props) => {
  const rawValue =
    typeof children === 'string' || typeof children === 'number'
      ? Number(children)
      : 0;

  const formattedRating = Number.isFinite(rawValue)
    ? rawValue.toFixed(1)
    : '0.0';

  return (
    <div className="rating">
      <StarIcon className="rating__icon" aria-hidden="true" />
      <span className="rating__value">{formattedRating}</span>
    </div>
  );
};
