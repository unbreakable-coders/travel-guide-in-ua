import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectField } from './SelectField';

const mockOptions = [
  { value: 'uk', label: 'Ukraine' },
  { value: 'us', label: 'USA' },
];

describe('SelectField', () => {
  const defaultProps = {
    name: 'country',
    options: mockOptions,
    onChange: jest.fn(),
  };

  it('renders correctly and shows selected option', () => {
    render(<SelectField {...defaultProps} modelValue="uk" />);

    const button = screen.getByRole('button');

    expect(within(button).getByText('Ukraine')).toBeInTheDocument();
  });

  it('toggles options list on click', async () => {
    const user = userEvent.setup();
    render(<SelectField {...defaultProps} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');

    const list = screen.getByRole('list');
    expect(within(list).getByText('USA')).toBeInTheDocument();
  });

  it('calls onChange and closes when option is selected', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <SelectField {...defaultProps} modelValue="uk" onChange={onChange} />
    );

    await user.click(screen.getByRole('button'));

    const option = screen.getByText('USA');
    await user.click(option);

    expect(onChange).toHaveBeenCalledWith('us');
  });

  it('closes when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <div data-testid="outside">Outside</div>
        <SelectField {...defaultProps} />
      </div>
    );

    const button = screen.getByRole('button');
    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');

    await user.click(screen.getByTestId('outside'));
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });
});
