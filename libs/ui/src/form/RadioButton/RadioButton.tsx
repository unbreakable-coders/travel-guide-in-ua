'use client';

import { RadioValue } from './RadioButton.types';
import './RadioButton.styles.scss';

interface Props {
  name: string;
  value: RadioValue;
  modelValue?: RadioValue;
  isDisabled?: boolean;
  label?: string;
  ariaLabel?: string;
  onChange: (value: RadioValue) => void;
}

export const RadioButton = ({
  name,
  value,
  modelValue,
  isDisabled = false,
  label,
  ariaLabel,
  onChange,
}: Props) => {
  const isChecked = modelValue === value;

  const handleChange = () => {
    if (isDisabled) return;
    onChange(value);
  };

  return (
    <label className={`radio ${isDisabled ? 'radio--disabled' : ''}`}>
      <input
        name={name}
        className="radio__input"
        type="radio"
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        aria-label={!label ? ariaLabel : undefined}
      />

      <span className="radio__ui" aria-hidden="true" />

      {label && <span className="radio__label">{label}</span>}
    </label>
  );
};
