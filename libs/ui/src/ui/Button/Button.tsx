'use client';

import React, { ReactNode } from 'react';
import { ButtonColor, ButtonType } from './Button.types';
import './Button.styles.scss';

interface Props {
  type?: ButtonType;
  isDisabled?: boolean;
  color?: ButtonColor;
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  type = ButtonType.Button,
  isDisabled = false,
  color = ButtonColor.PRIMARY,
  children,
  onClick,
}: Props) => {
  return (
    <button
      className={`button button--${color}`}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
