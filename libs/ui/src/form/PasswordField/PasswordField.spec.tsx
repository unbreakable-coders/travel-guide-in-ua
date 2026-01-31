import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PasswordField } from './PasswordField';

describe('PasswordField', () => {
  const defaultProps = {
    name: 'password',
    label: 'Password',
    onChange: jest.fn(),
  };

  it('renders correctly and toggles password visibility', async () => {
    const user = userEvent.setup();
    render(<PasswordField {...defaultProps} />);

    const input = screen.getByLabelText('Password') as HTMLInputElement;
    const toggleBtn = screen.getByRole('button');

    expect(input.type).toBe('password');

    await user.click(toggleBtn);
    expect(input.type).toBe('text');

    await user.click(toggleBtn);
    expect(input.type).toBe('password');
  });

  it('calls onChange and trims leading whitespace', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();

    render(<PasswordField {...defaultProps} onChange={onChangeMock} />);
    const input = screen.getByLabelText('Password');

    await user.type(input, '  p');

    expect(onChangeMock).toHaveBeenCalledWith('');
    expect(onChangeMock).toHaveBeenCalledWith('');
    expect(onChangeMock).toHaveBeenLastCalledWith('p');
  });

  it('is disabled when isDisabled prop is true', () => {
    render(<PasswordField {...defaultProps} isDisabled={true} />);

    const input = screen.getByLabelText('Password');
    const toggleBtn = screen.getByRole('button');

    expect(input).toBeDisabled();
    expect(toggleBtn).toBeDisabled();
  });
});
