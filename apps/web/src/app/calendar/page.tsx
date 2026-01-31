'use client';

import { useNextCalendarApp, ScheduleXCalendar } from '@schedule-x/react';
import {
  createViewDay,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar';
import 'temporal-polyfill/global';
import '@schedule-x/theme-default/dist/index.css';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { useState } from 'react';
import { mockEvents } from './mockData';
import './styles.scss';

export default function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0];
  const eventModal = createEventModalPlugin();

  const calendar = useNextCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
    weekOptions: {
      eventWidth: 95,
    },
    calendars: {
      personal: {
        colorName: 'personal',
        lightColors: {
          main: '#f9d71c',
          container: '#fff5aa',
          onContainer: '#594800',
        },
        darkColors: {
          main: '#fff5c0',
          onContainer: '#fff5de',
          container: '#a29742',
        },
      },
      work: {
        colorName: 'work',
        lightColors: {
          main: '#f91c45',
          container: '#ffd2dc',
          onContainer: '#59000d',
        },
        darkColors: {
          main: '#ffc0cc',
          onContainer: '#ffdee6',
          container: '#a24258',
        },
      },
      leisure: {
        colorName: 'leisure',
        lightColors: {
          main: '#1cf9b0',
          container: '#dafff0',
          onContainer: '#004d3d',
        },
        darkColors: {
          main: '#c0fff5',
          onContainer: '#e6fff5',
          container: '#42a297',
        },
      },
      school: {
        colorName: 'school',
        lightColors: {
          main: '#1c7df9',
          container: '#d2e7ff',
          onContainer: '#002859',
        },
        darkColors: {
          main: '#c0dfff',
          onContainer: '#dee6ff',
          container: '#426aa2',
        },
      },
    },
    events: mockEvents,
    plugins: [eventsService, eventModal],
    callbacks: {
      onRender: () => eventsService.getAll(),
      onEventUpdate(updatedEvent) {
        console.log('onEventUpdate', updatedEvent);
      },
    },
  });

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}
