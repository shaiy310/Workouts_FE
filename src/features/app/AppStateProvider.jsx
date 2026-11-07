import React from 'react';

import { useWorkoutEvents } from '../workouts/useWorkoutEvents';
import { useWorkouts } from '../workouts/useWorkouts';
import { useWeightTracking } from '../weights/useWeightTracking';
import { exercises as tempExercises, workouts as tempWorkouts } from '../../tempDB';

const AppStateContext = React.createContext(null);

export function AppStateProvider({ children }) {
  const [exercises, setExercises] = React.useState();
  const { workouts, setWorkouts, addWorkout } = useWorkouts();
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

  // React.useEffect(() => {
  // getAllExercises().then((res) => {
  //   let exerciseMapping = {}
  //   res.data.forEach(exercise => {
  //     exerciseMapping[exercise.name] = exercise
  //   });
  //   setExercises(exerciseMapping);
  // });  
  // }, []);

  const value = React.useMemo(
    () => ({
      exercises,
      workouts,
      events,
      weights,
      addWorkout,
      recordWorkout,
      recordWeightChange,
    }),
    [exercises, workouts, events, weights, addWorkout, recordWorkout, recordWeightChange]
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
