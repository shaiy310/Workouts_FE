import React from 'react';

import { getExerciseImages } from '../utils';
import './ExerciseNameCell.css';

function ExerciseNameCell({ exercises, exerciseName }) {
    const exerciseImages = getExerciseImages(exercises, exerciseName);

    return (
        <td className="exercise-name-cell">
            <span className="exercise-name">{exerciseName}</span>
            {exerciseImages.length > 0 && (
                <div className="exercise-image-tooltip">
                    {exerciseImages.map((src, i) => (
                        <img key={i} src={src} alt={`${exerciseName} reference ${i + 1}`} />
                    ))}
                </div>
            )}
        </td>
    );
}

export default ExerciseNameCell;