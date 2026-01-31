import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'orange', label: 'Orange' },
    { value: 'banana', label: 'Banana', disabled: true },
  ];

  it('renders all radio options and the main label', () => {
    render(<RadioGroup name="fruits" options={options} label="Pick a fruit" />);

    expect(screen.getByText('Pick a fruit')).toBeInTheDocument();
    expect(screen.getByLabelText('Apple')).toBeInTheDocument();
    expect(screen.getByLabelText('Orange')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('manages internal state when uncontrolled (defaultValue)', async () => {
    const user = userEvent.setup();
    render(<RadioGroup name="fruits" options={options} defaultValue="apple" />);

    const appleRadio = screen.getByLabelText('Apple');
    const orangeRadio = screen.getByLabelText('Orange');

    expect(appleRadio).toBeChecked();

    await user.click(orangeRadio);

    expect(orangeRadio).toBeChecked();
    expect(appleRadio).not.toBeChecked();
  });

  it('calls onChange and respects modelValue when controlled', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(
      <RadioGroup
        name="fruits"
        options={options}
        modelValue="apple"
        onChange={onChange}
      />
    );

    await user.click(screen.getByLabelText('Orange'));

    expect(onChange).toHaveBeenCalledWith('orange');
    expect(screen.getByLabelText('Apple')).toBeChecked();
  });

  it('prevents selection of disabled options', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(<RadioGroup name="fruits" options={options} onChange={onChange} />);

    const disabledRadio = screen.getByLabelText('Banana');
    expect(disabledRadio).toBeDisabled();

    await user.click(disabledRadio);
    expect(onChange).not.toHaveBeenCalled();
  });
});
