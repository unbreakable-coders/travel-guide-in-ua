import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconButton } from './IconButton';

const MockIcon = () => <svg data-testid="mock-icon" />;

describe('IconButton', () => {
  const defaultProps = {
    icon: MockIcon,
    ariaLabel: 'Close menu',
    onClick: jest.fn(),
  };

  it('renders correctly with icon and aria-label', () => {
    render(<IconButton {...defaultProps} />);

    const button = screen.getByRole('button', { name: /close menu/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('applies custom size via styles', () => {
    render(<IconButton {...defaultProps} size="50px" />);

    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ height: '50px', width: '50px' });
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<IconButton {...defaultProps} onClick={onClick} />);

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled and prevents click when isDisabled is true', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(
      <IconButton {...defaultProps} isDisabled={true} onClick={onClick} />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
