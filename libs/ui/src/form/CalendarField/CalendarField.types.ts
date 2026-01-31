export interface CalendarDay {
  day: number;
  availableTime: string[];
}

export interface CalendarMonth {
  month: string;
  days: CalendarDay[];
}

export interface CalendarValue {
  month: string;
  day: number;
  time?: string;
}
