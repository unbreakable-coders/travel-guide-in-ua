import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { TextAreaField } from './TextAreaField';

describe('TextAreaField', () => {
  it('renders label and placeholder', () => {
    render(
      <TextAreaField
        name="desc"
        label="Description"
        placeholder="Enter text..."
        onChange={jest.fn()}
      />
    );
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
  });

  it('calls onChange and prevents leading spaces', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();

    render(<TextAreaField name="test-area" onChange={onChangeMock} />);

    const textarea = screen.getByRole('textbox');

    await user.type(textarea, '  h');

    expect(onChangeMock).toHaveBeenCalledWith('');
    expect(onChangeMock).toHaveBeenCalledWith('');
    expect(onChangeMock).toHaveBeenLastCalledWith('h');
  });

  it('focuses textarea when label is clicked', async () => {
    const user = userEvent.setup();
    render(
      <TextAreaField name="test-area" label="Click Me" onChange={jest.fn()} />
    );

    const label = screen.getByText('Click Me');
    const textarea = screen.getByRole('textbox');

    await user.click(label);
    expect(textarea).toHaveFocus();
  });

  it('is disabled when isDisabled prop is true', () => {
    render(
      <TextAreaField name="desc" isDisabled={true} onChange={jest.fn()} />
    );
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass('text-area-field__textarea--disabled');
  });
});
