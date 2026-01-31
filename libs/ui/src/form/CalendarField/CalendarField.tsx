'use client';

import { useState, useMemo, useEffect } from 'react';
import { IconButton } from '../../ui/IconButton';
import { Arrow } from '../../icons/';
import { CalendarMonth, CalendarValue } from './CalendarField.types';
import './CalendarField.styles.scss';

interface Props {
  calendar: CalendarMonth[];
  onChange: (value: CalendarValue) => void;
}

const MONTH_INDEX: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CalendarField = ({ calendar, onChange }: Props) => {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());
  }, []);

  const year = useMemo(
    () => now?.getFullYear() ?? new Date().getFullYear(),
    [now]
  );

  const todayStart = useMemo(() => {
    if (!now) return 0;
    const d = new Date(now);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }, [now]);

  const getMonthIndex = (month: string) => {
    const key = month.trim().toLowerCase();
    return MONTH_INDEX[key] ?? now?.getMonth() ?? new Date().getMonth();
  };

  const getDaysInMonth = (y: number, mIdx: number) =>
    new Date(y, mIdx + 1, 0).getDate();

  const isMonthFullyPast = (mIdx: number) => {
    if (!mounted) return false;
    const lastDayTs = new Date(
      year,
      mIdx,
      getDaysInMonth(year, mIdx),
      23,
      59,
      59,
      999
    ).getTime();
    return lastDayTs < todayStart;
  };

  const firstAllowedIdx = useMemo(() => {
    const idx = calendar.findIndex(
      (m) => !isMonthFullyPast(getMonthIndex(m.month))
    );
    return idx === -1 ? 0 : idx;
  }, [calendar, mounted, year, todayStart]);

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<{
    monthIdx: number;
    day: number;
  } | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    if (mounted) {
      setActiveIdx(firstAllowedIdx);
    }
  }, [firstAllowedIdx, mounted]);

  const activeMonth = calendar[activeIdx] ?? null;
  const mIdx = getMonthIndex(activeMonth?.month ?? '');

  const availableDaysMap = useMemo(() => {
    const map = new Map<number, string[]>();
    activeMonth?.days.forEach((d) => map.set(d.day, d.availableTime));
    return map;
  }, [activeMonth]);

  const calendarCells = useMemo(() => {
    const firstWeekday = new Date(year, mIdx, 1).getDay();
    const daysInM = getDaysInMonth(year, mIdx);
    const blanks = Array.from({ length: firstWeekday }, () => null);
    const days = Array.from({ length: daysInM }, (_, i) => i + 1);
    return [...blanks, ...days];
  }, [mIdx, year]);

  const canGoPrev =
    activeIdx > 0 &&
    !isMonthFullyPast(getMonthIndex(calendar[activeIdx - 1]?.month ?? ''));
  const canGoNext = activeIdx < calendar.length - 1;

  const onDayClick = (day: number) => {
    const isPast = new Date(year, mIdx, day).getTime() < todayStart;
    if (!availableDaysMap.has(day) || isPast) return;

    setSelectedDay({ monthIdx: activeIdx, day });
    setSelectedTime(null);
    onChange({ month: activeMonth.month, day });
  };

  if (!mounted) {
    return <div className="calendar-field" style={{ minHeight: '300px' }} />;
  }

  return (
    <div className="calendar-field">
      <div className="calendar-header">
        <IconButton
          className="calendar-header__nav calendar-header__nav--prev"
          icon={Arrow}
          isDisabled={!canGoPrev}
          onClick={() => setActiveIdx(activeIdx - 1)}
          ariaLabel="Previous month"
          size="36px"
        />
        <div className="calendar-header__month">{activeMonth?.month}</div>
        <IconButton
          className="calendar-header__nav calendar-header__nav--next"
          icon={Arrow}
          isDisabled={!canGoNext}
          onClick={() => setActiveIdx(activeIdx + 1)}
          ariaLabel="Next month"
          size="36px"
        />
      </div>

      <div className="calendar-weekdays">
        {WEEK_DAYS.map((d) => (
          <div key={d} className="calendar-weekdays__item">
            {d}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {calendarCells.map((cell, i) => {
          const isSelected =
            selectedDay?.monthIdx === activeIdx && selectedDay?.day === cell;
          const isPast = cell
            ? new Date(year, mIdx, cell).getTime() < todayStart
            : false;
          const isClickable =
            cell !== null && availableDaysMap.has(cell) && !isPast;

          return (
            <button
              key={i}
              type="button"
              className={`calendar-grid__day ${
                cell === null ? 'calendar-grid__day--blank' : ''
              } ${isSelected ? 'calendar-grid__day--active' : ''} ${
                !isClickable && cell !== null
                  ? 'calendar-grid__day--disabled'
                  : ''
              }`}
              disabled={!isClickable}
              onClick={() => cell && onDayClick(cell)}
            >
              {cell}
            </button>
          );
        })}
      </div>

      {selectedDay &&
        selectedDay.monthIdx === activeIdx &&
        availableDaysMap.get(selectedDay.day)?.length && (
          <div className="calendar-time">
            {availableDaysMap.get(selectedDay.day)?.map((t) => (
              <button
                key={t}
                className={`calendar-time__button ${
                  selectedTime === t ? 'calendar-time__button--active' : ''
                }`}
                onClick={() => {
                  setSelectedTime(t);
                  onChange({
                    month: activeMonth.month,
                    day: selectedDay.day,
                    time: t,
                  });
                }}
              >
                {t}
              </button>
            ))}
          </div>
        )}
    </div>
  );
};
