import React from 'react';

import './WorkoutPage.css';

import WorkoutTable from './WorkoutTable';

import { getLocalDateKey } from '/src/utils';
import PageHeader from '../Shared/PageHeader';


function WorkoutPage({ exercises, workouts, workoutByday, weights, events, onWorkoutComplete, onWeightChange }) {
    const [day, setCurrentDay] = React.useState(new Date().getDay() + 1 || 1);

    const workout = (workouts && workouts[workoutByday[day]]) || {};
    const today = getLocalDateKey();
    const workoutAlreadyLogged = events.some(
        (event) => event.type === 'workout' && event.date === today && event.workoutDay === day
    );

    return (
        <section className="workout-page">
            <PageHeader
                title="Workout Details"
                eyebrow="TRAINING PLAN"
                description="Review the selected workout day, track your weights, and log completion once you're done."
            />

            <div className="tabs" role="tablist" aria-label="Workout days">
                {[1, 2, 3, 4, 5].map((dayTab) => {
                    return (
                        <button type="button"
                            key={`day${dayTab}`}
                            className={`tab-btn${dayTab === day ? ' active' : ''}`}
                            role="tab"
                            aria-selected={dayTab === day}
                            onClick={() => setCurrentDay(dayTab)}
                        >
                            Day {dayTab}
                        </button>
                    );
                })}
            </div>

            <h4>Day {day}: {workout.name}</h4>
            <div className="meta-info">
                <strong>Duration:</strong> ~{workout.duration} Minutes &nbsp;|&nbsp; <strong>Emphasis:</strong> {workout.emphasis}
            </div>
            <div className="notes">
                {workout.notes && <span>{workout.notes}</span>}
            </div>
            <WorkoutTable
                exercises={exercises}
                day={day}
                workout={workout}
                weights={weights}
                onWeightChange={onWeightChange}
            />
            {workout.sets?.length > 0 && (
                <button
                    type="button"
                    className="complete-workout-btn"
                    disabled={workoutAlreadyLogged}
                    onClick={() => onWorkoutComplete(day, workout)}
                >
                    {workoutAlreadyLogged ? 'Workout logged today' : 'Log workout as completed'}
                </button>
            )}

        </section>
    );
}

export default WorkoutPage;