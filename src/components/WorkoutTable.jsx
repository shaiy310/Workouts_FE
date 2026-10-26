import React from 'react';
import ExerciseNameCell from './ExerciseNameCell';
import ExerciseWeightCell from './ExerciseWeightCell';
import ExerciseRestIntervalCell from './ExerciseRestIntervalCell';
import { inferEquipment } from '../utils';
import './WorkoutTable.css';

function WorkoutTable({ exercises, day, workout, weights, onWeightChange }) {

    const sets = workout.sets || [];

    if (sets.length === 0) {
        return (
        // <tr>
            <span colSpan="5">No exercises scheduled for today. Enjoy your rest!</span>
        // </tr>
        );
    }

    return (
        <table>
            <thead>
                <tr>
                    <th style={{ width: '5%' }}>Order</th>
                    <th style={{ width: '27%' }}>Exercise Name</th>
                    <th style={{ width: '11%' }}>Equipment</th>
                    <th style={{ width: '17%' }}>Sets & Reps</th>
                    <th style={{ width: '15%' }}>Rest Intervals (Sec)</th>
                    <th style={{ width: '25%' }}>Weight (Kg)</th>
                </tr>
            </thead>
            <tbody>
                {sets.map((setGroup, index) => {
                    return setGroup.map((exercise, i) => {
                        const equipment = exercises[exercise.name]?.equipment || inferEquipment(exercise.name);
                        return (
                            <tr
                                key={`${day}-${index}-${i}`}
                                className="exercise"
                                style={{
                                    backgroundColor: `hsl(${index * 25}, ${setGroup.length * 50}%, 80%)`
                                }}
                            >
                                <td className="order-col">{index + 1}-{i + 1}</td>
                                <ExerciseNameCell exercise={exercise} />
                                <td>{equipment}</td>
                                <td>Sets: {exercise.sets}, Reps: {exercise.reps}</td>
                                <ExerciseRestIntervalCell exercise={exercise} />
                                <ExerciseWeightCell
                                    exercise={exercise}
                                    equipment={equipment}
                                    index={index}
                                    i={i}
                                    weight={weights[exercise.name] ?? exercises[exercise.name]?.weight}
                                    onWeightChange={onWeightChange}
                                />
                            </tr>
                        );
                    });
                })}
            </tbody>
        </table>
    );
}

export default WorkoutTable;