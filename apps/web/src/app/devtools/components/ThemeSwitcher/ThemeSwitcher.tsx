'use client';

import { useState, useEffect } from 'react';
import { TabGroup, TabOption } from '@org/ui';
import { Theme } from './ThemeSwitcher.types';

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.LIGHT_DEFAULT);

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    setCurrentTheme(theme);

    if (theme === Theme.LIGHT_DEFAULT) {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', theme);
    }

    localStorage.setItem('app-theme', theme);
  };

  const themeOptions: TabOption[] = [
    { label: 'Light', value: Theme.LIGHT_DEFAULT },
    { label: 'Dark', value: Theme.DARK },
    { label: 'Dim', value: Theme.DIM },
    { label: 'Amber', value: Theme.AMBER },
    { label: 'Green Dark', value: Theme.GREEN_DARK },
    { label: 'Slate', value: Theme.SLATE },
  ];

  return (
    <div className="theme-switcher-wrapper">
      <TabGroup
        options={themeOptions}
        defaultOption={currentTheme}
        onUpdate={(val) => applyTheme(val as Theme)}
      />
    </div>
  );
};
