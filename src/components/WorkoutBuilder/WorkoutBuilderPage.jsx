import React from "react";

import "./WorkoutBuilderPage.css";

import { sortObjectsByName } from "/src/utils";
import { Options } from "../Shared/Options";
import ObjectDirectoryList from "../Shared/ObjectDirectoryList";
import { exportAsJsonFile } from "../../utils";
import PageHeader from "../Shared/PageHeader";

const calculateEstimatedDuration = (sets) => {
  return sets.reduce((acc, set) => {
    const setDuration = (90 * set.exercises.length + set.rest) * set.num;
    return acc + setDuration;
  }, 0) / 60;
};

function WorkoutBuilderPage({ workouts, exercises, addWorkout }) {
  const sortedExercises = sortObjectsByName(exercises);
  const sortedWorkouts = sortObjectsByName(workouts);
  const [workout, setWorkout] = React.useState(sortedWorkouts[0] ?? undefined);

  function exportWorkouts() {
    exportAsJsonFile(workouts, 'workouts.json');
  }

  return (
    <section className="workout-builder-page">
      <PageHeader
        title="Workout Library"
        eyebrow="Workout Builder"
        buttons={[
          {
            text: 'New',
            onClick: () => setWorkout({ name: '', emphasis: '', sets: [] }),
          },
          {
            text: 'Save',
            isPrimary: true,
            onClick: () => addWorkout(workout),
          },
          {
            text: 'Export All',
            onClick: exportWorkouts,
          },
        ]}
      />

      <section className="workout-builder-layout">
        <ObjectDirectoryList
          objects={sortedWorkouts}
          selectedObjectName={workout.name}
          title="All Workouts"
          ariaLabel="Workouts"
          onSelect={(name) => setWorkout(workouts[name])}
        />

        <section className="workout-builder-content">
          <div className="workout-builder-card">
            <div className="workout-builder-section-heading">
              <h2>Workout details</h2>
            </div>

            <div className="workout-builder-field-group">
              <label className="workout-builder-field">
                <span>Workout name</span>
                <input
                  type="text"
                  placeholder="Enter workout name"
                  value={workout.name}
                  onChange={(e) =>
                    setWorkout({ ...workout, name: e.target.value })
                  }
                />
              </label>

              <label className="workout-builder-field">
                <span>Workout emphasis</span>
                <input
                  type="text"
                  placeholder="Strength / Hypertrophy / Conditioning"
                  value={workout.emphasis}
                  onChange={(e) =>
                    setWorkout({ ...workout, emphasis: e.target.value })
                  }
                />
              </label>
            </div>
          </div>

          <div className="workout-builder-card">
            <div className="workout-builder-section-heading">
              <h2>Sets</h2>
              <button
                type="button"
                className="workout-builder-button workout-builder-button--secondary"
                onClick={() =>
                  setWorkout({
                    ...workout,
                    sets: [
                      ...workout.sets,
                      { num: 3, rest: 60, exercises: [] },
                    ],
                  })
                }
              >
                Add Set
              </button>
            </div>

            <div className="workout-builder-exercise-list">
              {workout.sets.map((set, index) => (
                <article className="workout-builder-exercise-item" key={index}>
                  <div className="workout-builder-exercise-item__header">
                    <h3>Set {index + 1}</h3>
                    <button type="button" className="workout-builder-link">
                      Remove
                    </button>
                  </div>

                  <div className="workout-builder-exercise-item__body">
                    <div className="workout-builder-field-group">
                      <label className="workout-builder-field">
                        <span>Set Repeats</span>
                        <input
                          type="text"
                          placeholder={set.num}
                          onChange={(e) => {
                            const newSets = [...workout.sets];
                            newSets[index].num = parseInt(e.target.value) || 3;
                            setWorkout({ ...workout, sets: newSets });
                          }}
                        />
                      </label>

                      <label className="workout-builder-field">
                        <span>Rest</span>
                        <input
                          type="text"
                          placeholder={set.rest}
                          onChange={(e) => {
                            const newSets = [...workout.sets];
                            newSets[index].rest = parseInt(e.target.value) || 60;
                            setWorkout({ ...workout, sets: newSets });
                          }}
                        />
                      </label>


                    </div>
                    <label className="workout-builder-field">
                      <span>Exercises</span>
                      {set.exercises.map((exercise, i) => (
                        <div className="workout-builder-set-exercise-field-group" key={i}>
                          <span>Name:</span>
                          <select className="workout-builder-select" value={exercise.name} onChange={(e) => {
                            const newSets = [...workout.sets];
                            newSets[index].exercises[i] = e.target.value;
                            setWorkout({ ...workout, sets: newSets });
                          }}>
                            <option value="Select exercise" disabled>Select exercise</option>
                            <Options options={Object.values(sortedExercises)} />
                          </select>
                          <span>reps:</span>
                          <input type="text"
                            value={exercise.reps}
                            onChange={(e) => {
                              const newSets = [...workout.sets];
                              newSets[index].exercises[i].reps = parseInt(e.target.value) || 12;
                              setWorkout({ ...workout, sets: newSets });
                            }}
                          />
                          <button type="button" className="workout-builder-button workout-builder-button--secondary" onClick={() => {
                            const newSets = [...workout.sets];
                            newSets[index].exercises.splice(i, 1);
                            setWorkout({ ...workout, sets: newSets });
                          }}>
                            X
                          </button>
                        </div>
                      ))}
                      <select className="workout-builder-select" value="Select exercise" onChange={(e) => {
                        console.log('select', e.target.value);
                        const newSets = [...workout.sets];
                        newSets[index].exercises.push({ name: e.target.value, reps: 12 });
                        e.target.value = 'Select exercise';
                        setWorkout({ ...workout, sets: newSets });
                      }}>
                        <option value="Select exercise" disabled>Select exercise</option>
                        <Options options={Object.values(sortedExercises)} />
                      </select>
                    </label>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <aside className="workout-builder-summary">
          <div className="workout-builder-card">
            <h2>Summary</h2>

            <div className="workout-builder-summary__row">
              <span>Exercises</span>
              <strong>{workout.sets.reduce((acc, set) => acc + set.exercises.length, 0)}</strong>
            </div>

            <div className="workout-builder-summary__row">
              <span>Sets</span>
              <strong>{workout.sets.length}</strong>
            </div>

            <div className="workout-builder-summary__row">
              <span>Estimated duration</span>
              <strong>{calculateEstimatedDuration(workout.sets)} min</strong>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
}

export default WorkoutBuilderPage;