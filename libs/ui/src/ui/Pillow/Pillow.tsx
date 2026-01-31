import { ReactNode } from 'react';
import { PillowColor } from './Pillow.types';
import './Pillow.styles.scss';
import clsx from 'clsx';

interface Props {
  color: PillowColor;
  children: ReactNode;
}

export const Pillow = ({ color, children }: Props) => {
  return (
    <span className={clsx('pillow', { [`pillow--${color}`]: color })}>
      {children}
    </span>
  );
};
