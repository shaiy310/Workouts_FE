import React from 'react';

import { getLocalDateKey } from '../../utils';

function readStoredValue(key, fallback) {
  if (typeof window === 'undefined') return fallback;

  const storedValue = window.localStorage.getItem(key);
  if (!storedValue) return fallback;

  try {
    return JSON.parse(storedValue);
  } catch (error) {
    console.error(`Could not parse saved data for "${key}".`, error);
    return fallback;
  }
}

export function useWorkoutEvents(storageKey = 'workout-planner-events', initialValue = []) {
  const [events, setEvents] = React.useState(() => readStoredValue(storageKey, initialValue));

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, JSON.stringify(events));
    }
  }, [events, storageKey]);

  const recordWorkout = React.useCallback((day, workout) => {
    const today = getLocalDateKey();

    setEvents((currentEvents) => {
      const alreadyLogged = currentEvents.some(
        (event) => event.type === 'workout' && event.date === today && event.workoutDay === day
      );

      if (alreadyLogged) return currentEvents;

      return [
        ...currentEvents,
        {
          id: `${Date.now()}-${Math.random()}`,
          type: 'workout',
          date: today,
          workoutDay: day,
          workoutTitle: workout.title || `Day ${day} workout`,
        },
      ];
    });
  }, []);

  return { events, setEvents, recordWorkout };
}
