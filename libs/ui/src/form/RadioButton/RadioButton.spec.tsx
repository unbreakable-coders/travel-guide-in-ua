import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  const defaultProps = {
    name: 'gender',
    value: 'male',
    label: 'Male',
    onChange: jest.fn(),
  };

  it('renders correctly with label', () => {
    render(<RadioButton {...defaultProps} />);

    expect(screen.getByText('Male')).toBeInTheDocument();
    const input = screen.getByRole('radio');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'gender');
  });

  it('shows checked state when value matches modelValue', () => {
    render(<RadioButton {...defaultProps} modelValue="male" />);
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('calls onChange with value when clicked', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<RadioButton {...defaultProps} onChange={onChange} />);

    await user.click(screen.getByText('Male'));
    expect(onChange).toHaveBeenCalledWith('male');
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <RadioButton {...defaultProps} isDisabled={true} onChange={onChange} />
    );

    await user.click(screen.getByRole('radio'));
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('supports aria-label for accessibility', () => {
    render(
      <RadioButton
        name="test"
        value="1"
        ariaLabel="Option 1"
        onChange={jest.fn()}
      />
    );
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
  });
});
