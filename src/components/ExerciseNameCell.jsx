import React from 'react';

import { getExerciseImages } from '../utils';
import './ExerciseNameCell.css';

function ExerciseNameCell({ exercise }) {
    const exerciseImages = getExerciseImages(exercise.name);

    return (
        <td className="exercise-name-cell">
            <span className="exercise-name">{exercise.name}</span>
            {exerciseImages.length > 0 && (
                <div className="exercise-image-tooltip">
                    {exerciseImages.map((src, i) => (
                        <img key={i} src={src} alt={`${exercise.name} reference ${i + 1}`} />
                    ))}
                </div>
            )}
        </td>
    );
}

export default ExerciseNameCell;