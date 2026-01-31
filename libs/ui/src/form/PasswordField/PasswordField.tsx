'use client';

import React, { useState, useRef, useId } from 'react';
import { EyeClose, EyeOpen } from '../../icons';
import './PasswordField.styles.scss';

interface Props {
  name: string;
  isDisabled?: boolean;
  label?: string;
  placeholder?: string;
  ariaLabel?: string;
  onChange: (value: string) => void;
}

export const PasswordField = ({
  name,
  isDisabled = false,
  label,
  placeholder,
  ariaLabel,
  onChange,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const internalId = useId();

  const togglePassword = () => {
    if (isDisabled) return;
    setShowPassword((prev) => !prev);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value.trimStart());
  };

  return (
    <div className="password-field">
      {label && (
        <label htmlFor={internalId} className="password-field__label">
          {label}
        </label>
      )}

      <div className="password-field__input-wrapper">
        <input
          id={internalId}
          ref={inputRef}
          name={name}
          className="password-field__input"
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={handleInput}
          aria-label={!label ? ariaLabel : undefined}
        />

        <button
          type="button"
          className="password-field__toggle"
          onClick={togglePassword}
          disabled={isDisabled}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOpen /> : <EyeClose />}
        </button>
      </div>
    </div>
  );
};
