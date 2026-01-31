'use client';

import { IconButtonType } from './IconButton.types';
import { ComponentType, SVGProps } from 'react';
import clsx from 'clsx';
import './IconButton.styles.scss';

interface Props {
  type?: IconButtonType;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  ariaLabel?: string;
  isDisabled?: boolean;
  size?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton = ({
  type = 'button',
  icon: Icon,
  ariaLabel,
  isDisabled = false,
  size = '30px',
  className = '',
  onClick,
}: Props) => {
  return (
    <button
      className={clsx('icon-button', className)}
      type={type}
      disabled={isDisabled}
      aria-label={ariaLabel}
      style={{ height: size, width: size }}
      onClick={onClick}
    >
      <Icon />
    </button>
  );
};
