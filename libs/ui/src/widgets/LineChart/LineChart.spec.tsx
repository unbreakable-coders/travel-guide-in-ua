import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import { LineChart } from './LineChart';
import { LineChartLabelSet } from './LineChart.types';

jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (...args: unknown[]) => {
    const dynamicModule = jest.requireActual('next/dynamic');
    const LoadableComponent = dynamicModule.default(...args);
    LoadableComponent.preload = jest.fn();
    return LoadableComponent;
  },
}));

jest.mock('react-apexcharts', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-apexchart" />,
  };
});

describe('LineChart', () => {
  const defaultProps = {
    title: 'User Activity',
    labelSet: LineChartLabelSet.MONTHS,
    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  };

  it('renders the chart component after dynamic loading', async () => {
    await act(async () => {
      render(<LineChart {...defaultProps} />);
    });

    await waitFor(() => {
      expect(screen.getByTestId('mock-apexchart')).toBeInTheDocument();
    });
  });

  it('renders chart title correctly', async () => {
    await act(async () => {
      render(<LineChart {...defaultProps} />);
    });

    expect(screen.getByText('User Activity')).toBeInTheDocument();
  });
});
