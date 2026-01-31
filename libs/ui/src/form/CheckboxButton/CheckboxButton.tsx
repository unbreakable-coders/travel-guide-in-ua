'use client';

import { CheckboxValue } from './CheckboxButton.types';
import './CheckboxButton.styles.scss';

interface Props {
  name: string;
  value: CheckboxValue;
  modelValue?: CheckboxValue[];
  isDisabled?: boolean;
  label?: string;
  ariaLabel?: string;
  onChange: (value: CheckboxValue[]) => void;
}

export const CheckboxButton = ({
  name,
  value,
  modelValue = [],
  isDisabled = false,
  label,
  ariaLabel,
  onChange,
}: Props) => {
  const isChecked = modelValue.includes(value);

  const handleToggle = () => {
    if (isDisabled) return;

    const newValue = isChecked
      ? modelValue.filter((v) => v !== value)
      : [...modelValue, value];

    onChange(newValue);
  };

  return (
    <label className={`checkbox ${isDisabled ? 'checkbox--disabled' : ''}`}>
      <input
        name={name}
        className="checkbox__input"
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleToggle}
        aria-label={!label ? ariaLabel : undefined}
      />

      <span className="checkbox__ui" aria-hidden="true" />

      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
};
