import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TabGroup } from './TabGroup';

const mockOptions = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed', disabled: true },
];

describe('TabGroup', () => {
  it('renders all options', () => {
    render(<TabGroup options={mockOptions} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('sets initial active tab correctly', () => {
    render(
      <TabGroup options={mockOptions} defaultOption={mockOptions[1].value} />
    );
    const activeTab = screen.getByRole('button', { name: /active/i });
    expect(activeTab).toHaveClass('tab-button--active');
  });

  it('changes active tab on click and calls onUpdate', async () => {
    const user = userEvent.setup();
    const onUpdate = jest.fn();
    render(<TabGroup options={mockOptions} onUpdate={onUpdate} />);

    const activeBtn = screen.getByRole('button', { name: /active/i });
    await user.click(activeBtn);

    expect(activeBtn).toHaveClass('tab-button--active');
    expect(onUpdate).toHaveBeenCalledWith('active');
  });

  it('does not change tab if option is disabled', async () => {
    const user = userEvent.setup();
    const onUpdate = jest.fn();
    render(<TabGroup options={mockOptions} onUpdate={onUpdate} />);

    const disabledBtn = screen.getByRole('button', { name: /completed/i });
    await user.click(disabledBtn);

    expect(disabledBtn).not.toHaveClass('tab-button--active');
    expect(onUpdate).not.toHaveBeenCalled();
  });
});
