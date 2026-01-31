export enum LineChartLabelSet {
  MONTHS = 'months',
  WEEK_DAYS = 'week_days',
  SEASONS = 'seasons',
}

export const LINE_CHART_LABELS: Record<LineChartLabelSet, string[]> = {
  [LineChartLabelSet.MONTHS]: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  [LineChartLabelSet.WEEK_DAYS]: [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ],
  [LineChartLabelSet.SEASONS]: ['Spring', 'Summer', 'Autumn', 'Winter'],
};
