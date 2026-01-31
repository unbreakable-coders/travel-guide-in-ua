'use client';

import { useRef } from 'react';
import { InputType } from './FormField.types';
import './FormField.styles.scss';

interface Props {
  name: string;
  type?: InputType;
  isDisabled?: boolean;
  label?: string;
  placeholder?: string;
  ariaLabel?: string;
  onChange: (value: string) => void;
}

export const FormField = ({
  type = InputType.Text,
  name = 'field',
  isDisabled,
  label,
  placeholder,
  ariaLabel,
  onChange,
}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInput = (value: string) => {
    onChange?.(value.trimStart());
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="form-field">
      {label && (
        <span className="form-field__label" onClick={focusInput}>
          {label}
        </span>
      )}

      <input
        name={name}
        ref={inputRef}
        className={`form-field__input ${
          isDisabled ? 'form-field__input--disabled' : ''
        }`}
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={(event) => handleInput(event.target.value)}
        aria-label={!label ? ariaLabel : undefined}
      />
    </div>
  );
};
