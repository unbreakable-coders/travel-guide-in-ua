import { render, screen } from '@testing-library/react';
import { Pillow } from './Pillow';
import { PillowColor } from './Pillow.types';

describe('Pillow', () => {
  it('renders content correctly', () => {
    render(<Pillow color={PillowColor.Success}>Status Active</Pillow>);

    expect(screen.getByText('Status Active')).toBeInTheDocument();
  });

  it('applies the base pillow class', () => {
    render(<Pillow color={PillowColor.Success}>Content</Pillow>);

    const pillowElement = screen.getByText('Content');
    expect(pillowElement).toHaveClass('pillow');
  });

  it('applies the correct modifier class for success color', () => {
    render(<Pillow color={PillowColor.Success}>Status Active</Pillow>);

    const pillowElement = screen.getByText('Status Active');
    expect(pillowElement).toHaveClass('pillow--success');
  });

  it('applies the correct modifier class for danger color', () => {
    render(<Pillow color={PillowColor.Danger}>Error</Pillow>);

    const pillowElement = screen.getByText('Error');
    expect(pillowElement).toHaveClass('pillow--danger');
  });

  it('applies the correct modifier class for warning color', () => {
    render(<Pillow color={PillowColor.Warning}>Pending</Pillow>);

    const pillowElement = screen.getByText('Pending');
    expect(pillowElement).toHaveClass('pillow--warning');
  });
});
