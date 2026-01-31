import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { FormField } from './FormField';
import { InputType } from './FormField.types';

describe('FormField', () => {
  it('renders label and input with correct attributes', () => {
    render(
      <FormField
        type={InputType.Text}
        label="Username"
        name="username"
        onChange={jest.fn()}
      />
    );

    const input = screen.getByRole('textbox');
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'username');
  });

  it('renders with correct placeholder', () => {
    const placeholderText = 'Enter text here...';
    render(
      <FormField
        type={InputType.Text}
        name="field"
        placeholder={placeholderText}
        onChange={jest.fn()}
      />
    );

    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it('uses aria-label when no visible label is provided', () => {
    render(
      <FormField
        type={InputType.Text}
        name="search"
        ariaLabel="Search site"
        onChange={jest.fn()}
      />
    );

    expect(screen.getByLabelText('Search site')).toBeInTheDocument();
  });

  it('focuses the input when the label is clicked', async () => {
    const user = userEvent.setup();
    render(
      <FormField
        type={InputType.Text}
        label="Click Me"
        name="field"
        onChange={jest.fn()}
      />
    );

    const label = screen.getByText('Click Me');
    const input = screen.getByRole('textbox');

    expect(input).not.toHaveFocus();
    await user.click(label);
    expect(input).toHaveFocus();
  });

  it('should be disabled when isDisabled prop is true', () => {
    render(
      <FormField
        type={InputType.Text}
        name="field"
        isDisabled={true}
        onChange={jest.fn()}
      />
    );

    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('calls onChange and trims leading whitespace', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();

    render(
      <FormField
        type={InputType.Text}
        name="test_field"
        onChange={onChangeMock}
      />
    );

    const input = screen.getByRole('textbox');

    await user.type(input, '  a');

    expect(onChangeMock).toHaveBeenCalledWith('');
    expect(onChangeMock).toHaveBeenCalledWith('');
    expect(onChangeMock).toHaveBeenLastCalledWith('a');
  });
});
