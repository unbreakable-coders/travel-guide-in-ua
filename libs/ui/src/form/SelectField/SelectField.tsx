'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { Arrow, TickMark } from '../../icons';
import { SelectOption, SelectValue } from './SelectField.types';
import './SelectField.styles.scss';
import clsx from 'clsx';

interface Props {
  name: string;
  options: SelectOption[];
  label?: string;
  isDisabled?: boolean;
  modelValue?: SelectValue;
  onChange: (val: SelectValue) => void;
}

export const SelectField = ({
  name,
  options,
  label,
  isDisabled = false,
  modelValue,
  onChange,
}: Props) => {
  const [isShown, setIsShown] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const selectedOption = useMemo(() => {
    return options.find((o) => o.value === modelValue) || options[0] || null;
  }, [options, modelValue]);

  useEffect(() => {
    if (modelValue === undefined && options.length > 0) {
      onChange(options[0].value);
    }
  }, [options, modelValue, onChange]);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (
        isShown &&
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsShown(false);
      }
    };

    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [isShown]);

  const toggleOptions = () => {
    if (!isDisabled) setIsShown(!isShown);
  };

  const onSelect = (option: SelectOption) => {
    if (isDisabled) return;
    onChange(option.value);
    setIsShown(false);
  };

  return (
    <div
      className={`select-field ${isShown ? 'select-field--opened' : ''}`}
      ref={selectRef}
    >
      {label && (
        <p className="select-field__label" onClick={toggleOptions}>
          {label}
        </p>
      )}

      <button
        type="button"
        name={name}
        className={`select-field__btn ${
          isDisabled ? 'select-field__btn--disabled' : ''
        }`}
        disabled={isDisabled}
        aria-expanded={isShown}
        onClick={toggleOptions}
      >
        <div className="select-field__btn-content">
          {selectedOption?.icon && (
            <selectedOption.icon className="select-field__btn-icon" />
          )}
          <span>{selectedOption?.label}</span>
        </div>
        <Arrow className="select-field__arrow" />
      </button>

      <div
        className={clsx('select-field__options', {
          'select-field__options--shown': isShown,
        })}
        ref={optionsRef}
      >
        <ul className="select-field__option-list">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => onSelect(option)}
              className={`select-field__option-item ${
                option.value === selectedOption?.value
                  ? 'select-field__option-item--selected'
                  : ''
              }`}
            >
              <div className="select-field__option-content">
                {option.icon && (
                  <option.icon className="select-field__option-icon" />
                )}
                {option.label}
              </div>

              {option.value === selectedOption?.value && (
                <TickMark className="select-field__selected-icon" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
