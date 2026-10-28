import React from 'react';
import { exercises } from '../tempDB';
import { getExerciseImages } from '../utils';
import './ExerciseLibraryPage.css';

const exerciseList = Object.entries(exercises)
    .map(([name, details]) => ({ name, ...details }))
    .sort((first, second) => first.name.localeCompare(second.name));

function ExerciseLibraryPage({ weights, events }) {
    const [selectedExerciseName, setSelectedExerciseName] = React.useState(exerciseList[0]?.name);
    const [isWeightHistoryOpen, setIsWeightHistoryOpen] = React.useState(false);
    const selectedExercise = exerciseList.find((exercise) => exercise.name === selectedExerciseName);
    const currentWeight = weights[selectedExerciseName] ?? selectedExercise?.weight;
    const images = selectedExercise ? getExerciseImages(selectedExercise.name) : [];
    const weightHistory = events
        .filter((event) => event.type === 'weight' && event.exerciseName === selectedExerciseName)
        .sort((first, second) => second.date.localeCompare(first.date) || second.id.localeCompare(first.id));

    React.useEffect(() => {
        if (!isWeightHistoryOpen) return undefined;

        function handleKeyDown(event) {
            if (event.key === 'Escape') setIsWeightHistoryOpen(false);
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isWeightHistoryOpen]);

    return (
        <section className="exercise-library" aria-labelledby="exercise-library-title">
            <header className="exercise-library-heading">
                <p className="exercise-library-eyebrow">MOVEMENT REFERENCE</p>
                <h2 id="exercise-library-title">Exercise library</h2>
                <p>Browse your exercises and view their equipment, working weight, and movement reference.</p>
            </header>
            <div className="exercise-library-layout">
                <aside className="exercise-directory" aria-label="Exercises">
                    <div className="exercise-directory-heading">
                        <h3>All exercises</h3>
                        <span>{exerciseList.length}</span>
                    </div>
                    <ul>
                        {exerciseList.map((exercise) => (
                            <li key={exercise.name}>
                                <button
                                    type="button"
                                    className={`exercise-directory-item${exercise.name === selectedExerciseName ? ' selected' : ''}`}
                                    aria-current={exercise.name === selectedExerciseName ? 'true' : undefined}
                                    onClick={() => setSelectedExerciseName(exercise.name)}
                                >
                                    <span>{exercise.name}</span>
                                    <span className="exercise-list-chevron" aria-hidden="true">›</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {selectedExercise && (
                    <article className="exercise-detail" aria-live="polite">
                        <div className="exercise-detail-heading">
                            <div>
                                <p className="exercise-detail-eyebrow">EXERCISE DETAILS</p>
                                <h3>{selectedExercise.name}</h3>
                            </div>
                            <span className="exercise-equipment-badge">{selectedExercise.equipment}</span>
                        </div>

                        <div className="exercise-detail-facts">
                            <div>
                                <span>Equipment</span>
                                <strong>{selectedExercise.equipment}</strong>
                            </div>
                            <div>
                                <span>Working weight</span>
                                <strong>{currentWeight === 0 ? 'Bodyweight' : `${currentWeight} kg`}</strong>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="weight-history-link"
                                    onClick={() => setIsWeightHistoryOpen(true)}
                                >
                                    View weight changes ({weightHistory.length})
                                </button>
                            </div>
                        </div>

                        <section className="exercise-reference" aria-label="Exercise movement reference">
                            <h4>Movement reference</h4>
                            {images.length > 0 ? (
                                <div className="exercise-reference-images">
                                    {images.map((image, index) => (
                                        <img
                                            key={image}
                                            src={image}
                                            alt={`${selectedExercise.name} movement demonstration ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="exercise-reference-empty">
                                    <span aria-hidden="true">◎</span>
                                    <p>No GIF available for this exercise yet.</p>
                                </div>
                            )}
                        </section>
                    </article>
                )}
            </div>
            {isWeightHistoryOpen && selectedExercise && (
                <div
                    className="weight-history-overlay"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) setIsWeightHistoryOpen(false);
                    }}
                >
                    <section
                        className="weight-history-popup"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="weight-history-popup-title"
                    >
                        <header>
                            <div>
                                <p className="exercise-detail-eyebrow">WEIGHT HISTORY</p>
                                <h3 id="weight-history-popup-title">{selectedExercise.name}</h3>
                            </div>
                            <button
                                type="button"
                                className="weight-history-close"
                                aria-label="Close weight history"
                                onClick={() => setIsWeightHistoryOpen(false)}
                            >
                                ×
                            </button>
                        </header>
                        {weightHistory.length > 0 ? (
                            <ul>
                                {weightHistory.map((event) => (
                                    <li key={event.id}>
                                        <time dateTime={event.date}>
                                            {new Date(`${event.date}T12:00:00`).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </time>
                                        <span>{event.previousWeight} kg</span>
                                        <span className="weight-history-arrow" aria-hidden="true">→</span>
                                        <strong>{event.newWeight} kg</strong>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="exercise-weight-history-empty">No weight changes logged yet.</p>
                        )}
                    </section>
                </div>
            )}
        </section>
    );
}

export default ExerciseLibraryPage;
