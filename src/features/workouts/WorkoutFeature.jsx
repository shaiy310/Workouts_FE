import React from 'react';

import WorkoutPage from '../../components/Workouts/WorkoutPage';
import { workouts as workoutData } from '../../tempDB';
import { useAppState } from '../app/AppStateProvider';

export function WorkoutFeature() {
  const { exercises, weights, events, recordWorkout, recordWeightChange } = useAppState();

  if (!exercises) {
    return <p>Loading...</p>;
  }

  return (
    <WorkoutPage
      exercises={exercises}
      workouts={workoutData}
      weights={weights}
      events={events}
      onWorkoutComplete={recordWorkout}
      onWeightChange={recordWeightChange}
    />
  );
}
