import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckboxButton } from './CheckboxButton';

describe('CheckboxButton', () => {
  const defaultProps = {
    name: 'amenity',
    value: 'wifi',
    label: 'Free WiFi',
    onChange: jest.fn(),
  };

  it('renders correctly with label', () => {
    render(<CheckboxButton {...defaultProps} />);

    expect(screen.getByText('Free WiFi')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toHaveAttribute('name', 'amenity');
  });

  it('shows checked state when value is in modelValue', () => {
    render(
      <CheckboxButton {...defaultProps} modelValue={['parking', 'wifi']} />
    );

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('calls onChange with added value when clicked', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <CheckboxButton
        {...defaultProps}
        modelValue={['parking']}
        onChange={onChange}
      />
    );

    await user.click(screen.getByText('Free WiFi'));
    expect(onChange).toHaveBeenCalledWith(['parking', 'wifi']);
  });

  it('calls onChange with filtered array when unchecking', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <CheckboxButton
        {...defaultProps}
        modelValue={['wifi']}
        onChange={onChange}
      />
    );

    await user.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledWith([]);
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <CheckboxButton {...defaultProps} isDisabled={true} onChange={onChange} />
    );

    await user.click(screen.getByRole('checkbox'));
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('uses aria-label if label is not provided', () => {
    render(
      <CheckboxButton
        name="test"
        value="1"
        ariaLabel="Toggle item"
        onChange={jest.fn()}
      />
    );
    expect(screen.getByLabelText('Toggle item')).toBeInTheDocument();
  });
});
