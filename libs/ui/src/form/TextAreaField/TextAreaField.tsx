'use client';

import { useRef } from 'react';
import './TextAreaField.styles.scss';

interface Props {
  name: string;
  isDisabled?: boolean;
  label?: string;
  placeholder?: string;
  height?: string;
  onChange: (value: string) => void;
}

export const TextAreaField = ({
  isDisabled = false,
  label,
  placeholder,
  onChange,
  height = '300px',
  name,
}: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const rawValue = event.target.value;
    const trimmedValue = rawValue.trimStart();
    onChange(trimmedValue);
  };

  const focusTextarea = () => {
    if (!isDisabled) {
      textareaRef.current?.focus();
    }
  };

  return (
    <div className="text-area-field">
      {label && (
        <label className="text-area-field__label" onClick={focusTextarea}>
          {label}
        </label>
      )}

      <textarea
        ref={textareaRef}
        name={name}
        className={`text-area-field__textarea ${
          isDisabled ? 'text-area-field__textarea--disabled' : ''
        }`}
        placeholder={placeholder}
        disabled={isDisabled}
        style={{ height }}
        onChange={handleInput}
      />
    </div>
  );
};
