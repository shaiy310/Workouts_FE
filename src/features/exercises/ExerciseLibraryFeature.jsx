import React from 'react';

import ExerciseLibraryPage from '../../components/Library/ExerciseLibraryPage';
import { useAppState } from '../app/AppStateProvider';

export function ExerciseLibraryFeature() {
  const { exercises, weights, events } = useAppState();

  if (!exercises) {
    return <p>Loading...</p>;
  }

  return <ExerciseLibraryPage exercises={exercises} weights={weights} events={events} />;
}
