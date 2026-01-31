import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TabButton } from './TabButton';
import { TabButtonState } from './TabButton.types';

describe('TabButton', () => {
  it('renders children correctly', () => {
    render(<TabButton>Tab 1</TabButton>);
    expect(screen.getByRole('button', { name: /tab 1/i })).toBeInTheDocument();
  });

  it('applies active class when state is Active', () => {
    render(<TabButton state={TabButtonState.Active}>Active Tab</TabButton>);
    expect(screen.getByRole('button')).toHaveClass('tab-button--active');
  });

  it('is disabled and has disabled class when state is Disabled', () => {
    render(<TabButton state={TabButtonState.Disabled}>Disabled Tab</TabButton>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    expect(button).toHaveClass('tab-button--disabled');
  });

  it('calls onClick when clicked and not disabled', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<TabButton onClick={onClick}>Clickable</TabButton>);

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when state is Disabled', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(
      <TabButton state={TabButtonState.Disabled} onClick={onClick}>
        Static
      </TabButton>
    );

    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });
});
