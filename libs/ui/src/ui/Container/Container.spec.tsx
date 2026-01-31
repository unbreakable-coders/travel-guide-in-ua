import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('Container Component', () => {
  it('renders children correctly', () => {
    render(
      <Container>
        <span data-testid="child-element">Hello World</span>
      </Container>
    );

    expect(screen.getByTestId('child-element')).toBeInTheDocument();
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });

  it('has the base "app-container" class', () => {
    const { container } = render(<Container>Content</Container>);

    expect(container.firstChild).toHaveClass('app-container');
  });

  it('merges custom class names with the base class', () => {
    const customClass = 'extra-margin-top';
    const { container } = render(
      <Container className={customClass}>Content</Container>
    );

    const element = container.firstChild;
    expect(element).toHaveClass('app-container');
    expect(element).toHaveClass(customClass);
  });

  it('renders as a div by default', () => {
    const { container } = render(<Container>Content</Container>);

    expect(container.firstChild?.nodeName).toBe('DIV');
  });
});
