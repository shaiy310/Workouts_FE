import React from 'react';

import CalendarPage from '../../components/Calander/CalendarPage';
import { useAppState } from '../app/AppStateProvider';

export function CalendarFeature() {
  const { events } = useAppState();

  return <CalendarPage events={events} />;
}
