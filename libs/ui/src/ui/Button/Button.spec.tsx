import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { ButtonColor, ButtonType } from './Button.types';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument();
  });

  it('applies correct color class', () => {
    const { rerender } = render(
      <Button color={ButtonColor.PRIMARY}>Primary</Button>
    );
    expect(screen.getByRole('button')).toHaveClass('button--primary');

    rerender(<Button color={ButtonColor.GRAY}>Gray</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--gray');
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when isDisabled prop is true', () => {
    render(<Button isDisabled={true}>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('has correct type attribute', () => {
    render(<Button type={ButtonType.Submit}>Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
