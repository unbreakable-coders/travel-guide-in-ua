import clsx from 'clsx';
import { ReactNode } from 'react';
import './Container.styles.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: Props) => {
  return <div className={clsx('app-container', className)}>{children}</div>;
};
