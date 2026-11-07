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

export function useWorkouts(storageKey = 'workout-planner-workouts', initialValue = {}) {
  const [workouts, setWorkouts] = React.useState(() => readStoredValue(storageKey, initialValue));

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, JSON.stringify(workouts));
    }
  }, [workouts, storageKey]);

  const addWorkout = React.useCallback((workout) => {
    setWorkouts((currentWorkouts) => {
      return {...currentWorkouts, [workout.name] : workout};
    });
  }, []);

  return { workouts, setWorkouts, addWorkout };
}
