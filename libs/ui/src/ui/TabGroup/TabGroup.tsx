'use client';

import { useState, useEffect } from 'react';
import { TabButton, TabButtonState } from '../TabButton';
import { TabOption, TabValue } from './TabGroup.types';
import './TabGroup.styles.scss';

interface Props {
  options: TabOption[];
  defaultOption?: TabValue;
  onUpdate?: (value: TabValue) => void;
}

export const TabGroup = ({ options, defaultOption, onUpdate }: Props) => {
  const [activeValue, setActiveValue] = useState<TabValue | undefined>(() => {
    return defaultOption ?? options.find((o) => !o.disabled)?.value;
  });

  useEffect(() => {
    if (defaultOption !== undefined) {
      setActiveValue(defaultOption);
    }
  }, [defaultOption]);

  const handleSetActive = (option: TabOption) => {
    if (option.disabled || activeValue === option.value) return;

    setActiveValue(option.value);
    onUpdate?.(option.value);
  };

  const getTabState = (option: TabOption) => {
    if (option.disabled) return TabButtonState.Disabled;
    if (option.value === activeValue) return TabButtonState.Active;
    return TabButtonState.Static;
  };

  return (
    <div className="tab-group" role="tablist">
      {options.map((option: TabOption) => (
        <TabButton
          key={option.value}
          state={getTabState(option)}
          onClick={() => handleSetActive(option)}
        >
          {option.label}
        </TabButton>
      ))}
    </div>
  );
};
