'use client';

import { useState } from 'react';
import { RadioButton } from '../RadioButton/RadioButton';
import { RadioOption } from './RadioGroup.types';
import './RadioGroup.styles.scss';
import { RadioValue } from '../RadioButton';

interface Props {
  name: string;
  options: RadioOption[];
  defaultValue?: RadioValue;
  label?: string;
  modelValue?: RadioValue;
  onChange?: (value: RadioValue) => void;
}

export const RadioGroup = ({
  name,
  options,
  defaultValue,
  label,
  modelValue,
  onChange,
}: Props) => {
  const [internalValue, setInternalValue] = useState<RadioValue | undefined>(
    defaultValue
  );

  const isControlled = modelValue !== undefined;
  const currentValue = isControlled ? modelValue : internalValue;

  const handleChange = (newValue: RadioValue) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
  };

  return (
    <div
      className="radio-group"
      role="radiogroup"
      aria-labelledby={label ? `${name}-label` : undefined}
    >
      {label && (
        <span id={`${name}-label`} className="radio-group__label">
          {label}
        </span>
      )}

      <div className="radio-group__list">
        {options.map((option) => (
          <RadioButton
            key={String(option.value)}
            name={name}
            value={option.value}
            label={option.label ?? String(option.value)}
            isDisabled={option.disabled}
            modelValue={currentValue}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};
