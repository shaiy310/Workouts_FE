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

export function useWeightTracking({ setEvents }, storageKey = 'workout-planner-weights', initialValue = {}) {
  const [weights, setWeights] = React.useState(() => readStoredValue(storageKey, initialValue));

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, JSON.stringify(weights));
    }
  }, [weights, storageKey]);

  const recordWeightChange = React.useCallback((exerciseName, previousWeight, newWeight) => {
    setWeights((currentWeights) => ({
      ...currentWeights,
      [exerciseName]: newWeight,
    }));

    const date = getLocalDateKey();
    const eventId = `${Date.now()}-${Math.random()}`;

    setEvents((currentEvents) => {
      const isSameDayExerciseEvent = (event) =>
        event.type === 'weight' && event.date === date && event.exerciseName === exerciseName;
      const existingEvent = currentEvents.find(isSameDayExerciseEvent);

      if (!existingEvent) {
        if (previousWeight === newWeight) return currentEvents;

        return [
          ...currentEvents,
          {
            id: eventId,
            type: 'weight',
            date,
            exerciseName,
            previousWeight,
            newWeight,
          },
        ];
      }

      if (existingEvent.previousWeight === newWeight) {
        return currentEvents.filter((event) => !isSameDayExerciseEvent(event));
      }

      let updatedExistingEvent = false;
      return currentEvents.reduce((updatedEvents, event) => {
        if (!isSameDayExerciseEvent(event)) {
          updatedEvents.push(event);
        } else if (!updatedExistingEvent) {
          updatedEvents.push({ ...event, newWeight });
          updatedExistingEvent = true;
        }

        return updatedEvents;
      }, []);
    });
  }, [setEvents]);

  return { weights, setWeights, recordWeightChange };
}
