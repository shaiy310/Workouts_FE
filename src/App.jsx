import React from 'react';
import './App.css';
import WorkoutDetails from './components/WorkoutDetails';
import CalendarPage from './components/CalendarPage';
import {exercises, workouts as workoutData} from './tempDB';
import { getLocalDateKey } from './utils';

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
  const [page, setPage] = React.useState('workouts');
  const [events, setEvents] = React.useState(() => readStoredValue(EVENTS_STORAGE_KEY, []));
  const [weights, setWeights] = React.useState(() => readStoredValue(WEIGHTS_STORAGE_KEY, {}));

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
    setEvents((currentEvents) => [
      ...currentEvents,
      {
        id: `${Date.now()}-${Math.random()}`,
        type: 'weight',
        date: getLocalDateKey(),
        exerciseName,
        previousWeight,
        newWeight,
      },
    ]);
  }

  return (
    <div className="App">
      <header className="app-header">
        <div>
          <p className="app-eyebrow">YOUR TRAINING SPACE</p>
          <h1>Workout Planner</h1>
        </div>
        <nav className="app-navigation" aria-label="Main navigation">
          <button
            type="button"
            className={page === 'workouts' ? 'active' : ''}
            aria-current={page === 'workouts' ? 'page' : undefined}
            onClick={() => setPage('workouts')}
          >
            Workouts
          </button>
          <button
            type="button"
            className={page === 'calendar' ? 'active' : ''}
            aria-current={page === 'calendar' ? 'page' : undefined}
            onClick={() => setPage('calendar')}
          >
            Calendar
          </button>
        </nav>
      </header>
      <main>
        {page === 'workouts' ? (
          <WorkoutDetails
            exercises={exercises}
            workouts={workoutData}
            weights={weights}
            events={events}
            onWorkoutComplete={recordWorkout}
            onWeightChange={recordWeightChange}
          />
        ) : (
          <CalendarPage events={events} />
        )}
      </main>
    </div>
  );
}

export default App;
