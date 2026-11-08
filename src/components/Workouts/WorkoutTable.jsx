import React from 'react';

import './WorkoutTable.css';

import ExerciseNameCell from './ExerciseNameCell';
import ExerciseWeightCell from './ExerciseWeightCell';
import EndSetRow from './EndSetRow';

import { inferEquipment } from '/src/utils';

function WorkoutTable({ exercises, day, workout, weights, onWeightChange }) {

    const sets = workout.sets || [];

    if (sets.length === 0) {
        return (!workout.notes &&
            <span colSpan="5">No exercises scheduled for today. Enjoy your rest!</span>
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
                    <th style={{ width: '25%' }}>Weight (Kg)</th>
                </tr>
            </thead>
            <tbody>
                {sets.map((setGroup, index) => {
                    const rowColor = `hsl(${index * 25}, ${setGroup.exercises.length * 50}%, 80%)`;
                    let groupRows = setGroup.exercises.map(({ name: exerciseName, reps }, i) => {
                        const equipment = exercises[exerciseName]?.equipment || inferEquipment(exerciseName);
                        return (
                            <tr
                                key={`${day}-${index}-${i}`}
                                className="exercise"
                                style={{
                                    backgroundColor: rowColor,
                                }}
                            >
                                <td className="order-col">{index + 1}-{i + 1}</td>
                                <ExerciseNameCell exercises={exercises} exerciseName={exerciseName} />
                                <td>{equipment}</td>
                                <td>Sets: {setGroup.num}, Reps: {reps}</td>

                                <ExerciseWeightCell
                                    exerciseName={exerciseName}
                                    equipment={equipment}
                                    index={index}
                                    i={i}
                                    weight={weights[exerciseName] ?? exercises[exerciseName]?.weight}
                                    onWeightChange={onWeightChange}
                                />
                            </tr>
                        );
                    });
                    return [...groupRows,
                    <EndSetRow key={`${day}-${index}-rest`} setNumTotal={setGroup.num} restTime={setGroup.rest} rowColor={rowColor} />
                    ];
                })}
            </tbody>
        </table>
    );
}

export default WorkoutTable;