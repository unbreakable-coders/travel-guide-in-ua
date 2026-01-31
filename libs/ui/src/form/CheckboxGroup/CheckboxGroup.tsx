'use client';

import { useState } from 'react';
import { CheckboxButton } from '../CheckboxButton/CheckboxButton';
import { CheckboxOption } from './CheckboxGroup.types';
import { CheckboxValue } from '../CheckboxButton';
import './CheckboxGroup.styles.scss';

interface Props {
  name: string;
  options: CheckboxOption[];
  defaultSelected?: CheckboxValue[];
  label?: string;
  modelValue?: CheckboxValue[];
  onChange?: (value: CheckboxValue[]) => void;
}

export const CheckboxGroup = ({
  name,
  options,
  defaultSelected = [],
  label,
  modelValue,
  onChange,
}: Props) => {
  const [internalSelected, setInternalSelected] =
    useState<CheckboxValue[]>(defaultSelected);

  const isControlled = modelValue !== undefined;
  const currentSelected = isControlled ? modelValue : internalSelected;

  const handleChange = (newValue: CheckboxValue[]) => {
    if (!isControlled) {
      setInternalSelected(newValue);
    }

    onChange?.(newValue);
  };

  return (
    <div className="checkbox-group">
      {label && <div className="checkbox-group__label">{label}</div>}

      <div className="checkbox-group__list">
        {options.map((option) => (
          <CheckboxButton
            key={String(option.value)}
            name={name}
            value={option.value}
            label={option.label ?? String(option.value)}
            isDisabled={option.disabled}
            modelValue={currentSelected}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};
