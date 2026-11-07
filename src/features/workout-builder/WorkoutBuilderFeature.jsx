import React from 'react';

import WorkoutBuilderPage from '../../components/WorkoutBuilder/WorkoutBuilderPage';
import { useAppState } from '../app/AppStateProvider';

export function WorkoutBuilderFeature() {
  const { exercises, workouts, addWorkout } = useAppState();

  if (!exercises) {
    return <p>Loading...</p>;
  }

  return <WorkoutBuilderPage workouts={workouts} exercises={exercises} />;
}
