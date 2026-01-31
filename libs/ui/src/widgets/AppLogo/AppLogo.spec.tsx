import { render, screen } from '@testing-library/react';
import { AppLogo } from './AppLogo';

describe('AppLogo', () => {
  it('renders as a link pointing to home', () => {
    render(<AppLogo />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });

  it('applies vertical class when isVertical is true', () => {
    const { container } = render(<AppLogo isVertical={true} />);
    const brandElement = container.querySelector('.brand');
    expect(brandElement).toHaveClass('brand--vertical');
  });

  it('has icon with aria-hidden', () => {
    const { container } = render(<AppLogo />);
    const icon = container.querySelector('svg');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });
});
