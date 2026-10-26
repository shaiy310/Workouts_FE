import React from 'react';
import WorkoutTable from './WorkoutTable';
import { getLocalDateKey } from '../utils';
import './WorkoutDetails.css';


function WorkoutDetails({ exercises, workouts, weights, events, onWorkoutComplete, onWeightChange }) {
    const [day, setCurrentDay] = React.useState(1);

    const workout = (workouts && workouts[day]) || {};
    const today = getLocalDateKey();
    const workoutAlreadyLogged = events.some(
        (event) => event.type === 'workout' && event.date === today && event.workoutDay === day
    );

    return (
        <div className="workoutDetails">
            <h2>Workout Details</h2>
            <div className="tabs" role="tablist" aria-label="Workout days">
                {[1,2,3,4,5].map((dayTab) => {
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

            <h4>Day {day}: {workout.title}</h4>
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

        </div>
    );
}

export default WorkoutDetails;