import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from './ThemeSwitcher.types';

describe('ThemeSwitcher', () => {
  beforeEach(() => {
    document.body.removeAttribute('data-theme');
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should apply the default theme on mount if no storage exists', () => {
    render(<ThemeSwitcher />);
    expect(document.body.getAttribute('data-theme')).toBeNull();
  });

  it('should load and apply theme from localStorage on mount', () => {
    Storage.prototype.getItem = jest.fn(() => Theme.DARK);

    render(<ThemeSwitcher />);

    expect(document.body.getAttribute('data-theme')).toBe(Theme.DARK);
  });

  it('should update body attribute and localStorage when a theme is selected', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    render(<ThemeSwitcher />);

    const darkBtn = screen.getByText('Dark');
    fireEvent.click(darkBtn);

    expect(document.body.getAttribute('data-theme')).toBe(Theme.DARK);
    expect(setItemSpy).toHaveBeenCalledWith('app-theme', Theme.DARK);
  });

  it('should remove the data-theme attribute when Light (default) is selected', () => {
    document.body.setAttribute('data-theme', Theme.DARK);

    render(<ThemeSwitcher />);

    const lightButton = screen.getByText('Light');
    fireEvent.click(lightButton);

    expect(document.body.hasAttribute('data-theme')).toBe(false);
  });
});
