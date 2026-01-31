'use client';

import { ReactNode } from 'react';
import { TabButtonState } from './TabButton.types';
import './TabButton.styles.scss';

interface Props {
  state?: TabButtonState;
  children: ReactNode;
  onClick?: () => void;
}

export const TabButton = ({
  state = TabButtonState.Static,
  children,
  onClick,
}: Props) => {
  const isDisabled = state === TabButtonState.Disabled;
  const isActive = state === TabButtonState.Active;

  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`tab-button ${isActive ? 'tab-button--active' : ''} ${
        isDisabled ? 'tab-button--disabled' : ''
      }`}
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
