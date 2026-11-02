import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import WorkoutDetails from './components/WorkoutDetails';
import CalendarPage from './components/CalendarPage';
import ExerciseLibraryPage from './components/ExerciseLibraryPage';
import {workouts_new as workoutData, exercises as tempExercises} from './tempDB';
import { getLocalDateKey } from './utils';
import { getAllExercises } from './services/api';

const EVENTS_STORAGE_KEY = 'workout-planner-events';
const WEIGHTS_STORAGE_KEY = 'workout-planner-weights';

function readStoredValue(key, fallback) {
  const storedValue = window.localStorage.getItem(key);
  if (!storedValue) return fallback;

  try {
    return JSON.parse(storedValue);
  } catch (error) {
    console.error(`Could not parse saved data for "${key}".`, error);
    return fallback;
  }
}

function App() {
  const [exercises, setExercises] = React.useState();
  const [events, setEvents] = React.useState(() => readStoredValue(EVENTS_STORAGE_KEY, []));
  const [weights, setWeights] = React.useState(() => readStoredValue(WEIGHTS_STORAGE_KEY, {}));

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

  React.useEffect(() => {
    window.localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  React.useEffect(() => {
    window.localStorage.setItem(WEIGHTS_STORAGE_KEY, JSON.stringify(weights));
  }, [weights]);

  function recordWorkout(day, workout) {
    const today = getLocalDateKey();
    const alreadyLogged = events.some(
      (event) => event.type === 'workout' && event.date === today && event.workoutDay === day
    );

    if (alreadyLogged) return;

    setEvents((currentEvents) => [
      ...currentEvents,
      {
        id: `${Date.now()}-${Math.random()}`,
        type: 'workout',
        date: today,
        workoutDay: day,
        workoutTitle: workout.title || `Day ${day} workout`,
      },
    ]);
  }

  function recordWeightChange(exerciseName, previousWeight, newWeight) {
    setWeights((currentWeights) => ({ ...currentWeights, [exerciseName]: newWeight }));
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
  }

  return (
    <div className="App">
      <header className="app-header">
        <div>
          <p className="app-eyebrow">YOUR TRAINING SPACE</p>
          <h1>Workout Planner</h1>
        </div>
        <nav className="app-navigation" aria-label="Main navigation">
          <NavLink to="/" end>
            Workouts
          </NavLink>
          <NavLink to="/calendar">
            Calendar
          </NavLink>
          <NavLink to="/exercises">
            Exercises
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              exercises ?
              <WorkoutDetails
                exercises={exercises}
                workouts={workoutData}
                weights={weights}
                events={events}
                onWorkoutComplete={recordWorkout}
                onWeightChange={recordWeightChange}
              />
              : <p>Loading...</p>
            }
          />
          <Route path="/calendar" element={<CalendarPage events={events} />} />
          <Route path="/exercises" element={<ExerciseLibraryPage exercises={exercises} weights={weights} events={events} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
