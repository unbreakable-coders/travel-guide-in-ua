import { CalendarEventExternal } from '@schedule-x/calendar';

const now = Temporal.Now.zonedDateTimeISO();
const calendarIds = ['work', 'school', 'personal'];

const randomBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomTimeShift = () => randomBetween(-10, 10); // days

const randomEvent = (idx: number): CalendarEventExternal => {
  const shiftDays = randomTimeShift();
  const startHour = randomBetween(6, 18);
  const durationHours = randomBetween(1, 4);

  const start = now
    .add({ days: shiftDays })
    .with({ hour: startHour, minute: 0, second: 0, millisecond: 0 });

  const end = start.add({ hours: durationHours });

  return {
    id: `evt-${idx + 1}`,
    start,
    end,
    title: `Event ${idx + 1}`,
    people: ['Alex', 'Jordan', 'Taylor'].slice(0, randomBetween(1, 3)),
    location: ['Office', 'Zoom', 'Cafe', 'Client Site'][randomBetween(0, 3)],
    description: 'Mock event for Schedule x Calendar.',
    calendarId: calendarIds[randomBetween(0, calendarIds.length - 1)],
  };
};

export const mockEvents: CalendarEventExternal[] = Array.from(
  { length: 20 },
  (_, i) => randomEvent(i)
);
