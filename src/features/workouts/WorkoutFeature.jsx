import React from 'react';

import WorkoutPage from '../../components/Workouts/WorkoutPage';
import { workoutByday } from '../../tempDB';
import { useAppState } from '../app/AppStateProvider';

export function WorkoutFeature() {
  const { exercises, workouts, weights, events, recordWorkout, recordWeightChange } = useAppState();

  if (!exercises) {
    return <p>Loading...</p>;
  }

  return (
    <WorkoutPage
      exercises={exercises}
      workouts={workouts}
      workoutByday={workoutByday}
      weights={weights}
      events={events}
      onWorkoutComplete={recordWorkout}
      onWeightChange={recordWeightChange}
    />
  );
}
