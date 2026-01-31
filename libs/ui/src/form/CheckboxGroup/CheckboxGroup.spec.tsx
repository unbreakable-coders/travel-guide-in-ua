import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckboxGroup } from './CheckboxGroup';

describe('CheckboxGroup', () => {
  const options = [
    { value: 'wifi', label: 'WiFi' },
    { value: 'pool', label: 'Pool' },
    { value: 'parking', label: 'Parking', disabled: true },
  ];

  it('renders all options and main label', () => {
    render(
      <CheckboxGroup
        name="amenities"
        options={options}
        label="Select Amenities"
      />
    );

    expect(screen.getByText('Select Amenities')).toBeInTheDocument();
    expect(screen.getByText('WiFi')).toBeInTheDocument();
    expect(screen.getByText('Pool')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(3);
  });

  it('works as uncontrolled component with defaultSelected', async () => {
    const user = userEvent.setup();
    render(
      <CheckboxGroup
        name="amenities"
        options={options}
        defaultSelected={['wifi']}
      />
    );

    const wifiCheckbox = screen.getByLabelText('WiFi');
    const poolCheckbox = screen.getByLabelText('Pool');

    expect(wifiCheckbox).toBeChecked();
    expect(poolCheckbox).not.toBeChecked();

    await user.click(poolCheckbox);
    expect(poolCheckbox).toBeChecked();
  });

  it('works as controlled component and calls onChange', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(
      <CheckboxGroup
        name="amenities"
        options={options}
        modelValue={['wifi']}
        onChange={onChange}
      />
    );

    await user.click(screen.getByLabelText('Pool'));
    expect(onChange).toHaveBeenCalledWith(['wifi', 'pool']);
  });

  it('does not allow interaction with disabled options', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(
      <CheckboxGroup name="amenities" options={options} onChange={onChange} />
    );

    const disabledOption = screen.getByLabelText('Parking');
    expect(disabledOption).toBeDisabled();

    await user.click(disabledOption);
    expect(onChange).not.toHaveBeenCalled();
  });
});
