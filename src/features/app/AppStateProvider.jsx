import React from 'react';

import { useWorkoutEvents } from '../workouts/useWorkoutEvents';
import { useWeightTracking } from '../weights/useWeightTracking';
import { exercises as tempExercises } from '../../tempDB';

const AppStateContext = React.createContext(null);

export function AppStateProvider({ children }) {
  const [exercises, setExercises] = React.useState();
  const { events, setEvents, recordWorkout } = useWorkoutEvents();
  const { weights, recordWeightChange } = useWeightTracking({ setEvents });

  React.useEffect(() => {
    // getAllExercises().then((res) => {
    //   let exerciseMapping = {}
    //   res.data.forEach(exercise => {
    //     exerciseMapping[exercise.name] = exercise
    //   });
    //   setExercises(exerciseMapping);
    // });
    setExercises(tempExercises);
  }, []);

  const value = React.useMemo(
    () => ({
      exercises,
      events,
      weights,
      recordWorkout,
      recordWeightChange,
    }),
    [events, exercises, recordWorkout, recordWeightChange, weights]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = React.useContext(AppStateContext);

  if (!context) {
    throw new Error('useAppState must be used inside AppStateProvider');
  }

  return context;
}
