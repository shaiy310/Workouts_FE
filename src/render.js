function renderWeekOverview() {
    const weekOverview = getRoutineOverview();
    const $table = appState.weekOverviewTable || $('#weekOverview');
    appState.weekOverviewTable = $table;
    $table.empty();

    weekOverview.forEach(day => {
        const row = $('<tr></tr>');
        row.append(`<td class="highlight-day">Day ${day.day}</td>`);
        row.append(`<td>${day.focus}</td>`);
        row.append(`<td>${day.stimulus}</td>`);
        row.append(`<td>${day.structure}</td>`);
        $table.append(row);
    });
}

function renderWorkoutDetails(day) {
    const routine = getWorkoutDetails();
    const workout = routine[day] || { title: 'Rest / Recovery', sets: [] };
    appState.currentDay = day;
    window.currentDay = day;

    const $details = appState.workoutDetailsContainer || $('#workoutDetails');
    appState.workoutDetailsContainer = $details;
    appState.workoutTable = $details.find('tbody');

    $details.children('h4').text(`Workout Details for Day ${day}: ${workout.title}`);
    $details.children('.meta-info').html(
        `<strong>Duration:</strong> ~${workout.duration} Minutes &nbsp;|&nbsp; <strong>Emphasis:</strong> ${workout.emphasis}`
    );

    if (workout.notes) {
        $details.children('#notes').html(`<li>${workout.notes}</li>`);
    } else {
        $details.children('#notes').empty();
    }

    renderExerciseTable(workout.sets);
}

function renderExerciseTable(sets) {
    const $table = appState.workoutTable || $('#workoutDetails').find('tbody');
    appState.workoutTable = $table;

    if (!sets || sets.length === 0) {
        $table.html('<tr><td colspan="5">No exercises scheduled for today. Enjoy your rest!</td></tr>');
        return;
    }

    $table.empty();
    sets.forEach((setGroup, index) => {
        setGroup.forEach((exercise, i) => {
            const exerciseContainer = $('<tr class="exercise"></tr>');
            exerciseContainer.css('background-color', `hsl(${(index * 25)}, ${setGroup.length * 50}%, 80%)`);

            const exerciseNameCell = $('<td class="exercise-name-cell"></td>');
            const exerciseName = $('<span class="exercise-name"></span>').text(exercise.name);
            const exerciseImages = getExerciseImages(exercise.name);
            const imgs = exerciseImages.map((src, i) => `<img src="${src}" alt="${exercise.name} reference ${i + 1}" />`);

            if (imgs.length > 0) {
                const exerciseTooltip = $(`
                    <div class="exercise-image-tooltip">
                        ${imgs.join('')}
                    </div>
                `);
                exerciseNameCell.append(exerciseName, exerciseTooltip);
            } else {
                exerciseNameCell.append(exerciseName);
            }

            exerciseContainer.append(`<td class="order-col">${index + 1}-${i + 1}</td>`);
            exerciseContainer.append(exerciseNameCell);
            exerciseContainer.append(`<td>Sets: ${exercise.sets}, Reps: ${exercise.reps}</td>`);
            exerciseContainer.append(`<td>${exercise.rest} seconds</td>`);

            const equipment = exercises[exercise.name]?.equipment || inferEquipment(exercise.name);
            const currentWeight = exercises[exercise.name]?.weight;
            const tooltipText = getWeightTooltip(equipment, currentWeight);
            const opts = weightOptions[equipment] || weightOptions.bodyweight;

            const weightCell = $(`
                <td class="weight-cell" data-equipment="${equipment}" data-name="${exercise.name}" data-set-index="${index}" data-ex-index="${i}">
                    <button class="wt-btn wt-decrease" type="button">−</button>
                    <span class="wt-value" data-tooltip="${tooltipText}">
                        ${currentWeight}${opts[0] === 'BW' ? '' : ' Kg'}
                    </span>
                    <button class="wt-btn wt-increase" type="button">+</button>
                </td>
            `);

            exerciseContainer.append(weightCell);
            $table.append(exerciseContainer);
        });
    });
}
