'use client';

import dynamic from 'next/dynamic';
import { LineChartLabelSet, LINE_CHART_LABELS } from './LineChart.types';
import './LineChart.styles.scss';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => (
    <div style={{ height: '200px' }} className="line-chart__loading" />
  ),
});

interface Props {
  title: string;
  labelSet: LineChartLabelSet;
  data: number[];
  color?: string;
  height?: string | number;
  thickness?: number;
  grid?: {
    x?: boolean;
    y?: boolean;
  };
}

export const LineChart = ({
  title,
  labelSet,
  data,
  color = '#3BC1A8',
  height = 200,
  thickness = 2,
  grid = { x: true, y: true },
}: Props) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: 'inherit',
    },
    colors: [color],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: thickness },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    grid: {
      show: true,
      borderColor: 'var(--color-gray)',
      xaxis: { lines: { show: grid.x } },
      yaxis: { lines: { show: grid.y } },
    },
    xaxis: {
      categories: LINE_CHART_LABELS[labelSet],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    tooltip: { theme: 'dark', x: { show: true } },
  };

  const series = [{ name: title, data: data }];

  return (
    <div className="line-chart">
      <h4 className="line-chart__title">{title}</h4>

      <div className="line-chart__chart">
        <Chart options={options} series={series} type="area" height={height} />
      </div>
    </div>
  );
};
