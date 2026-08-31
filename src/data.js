window.appState = window.appState || {
    currentDay: new Date().getDay() + 1 || 1,
    routine: null,
    weekOverviewTable: null,
    workoutDetailsContainer: null,
    workoutTable: null
};

function getRoutineOverview() {
    return overview;
}

function getWorkoutDetails() {
    return workouts;
}
