$(document).ready(function () {
    appState.routine = getWorkoutDetails();
    appState.weekOverviewTable = $('#weekOverview');
    renderWeekOverview();

    const $toggle = $('#toggleWeekOverview');

    if (localStorage.getItem('weekOverviewCollapsed') === 'true') {
        appState.weekOverviewTable.hide();
        $toggle.text('+').attr('aria-expanded', 'false');
    }

    appState.workoutDetailsContainer = $('#workoutDetails');
    appState.workoutTable = appState.workoutDetailsContainer.find('tbody');
    renderWorkoutDetails(window.appState.currentDay);

    $(`.tab-btn[data-day="${window.currentDay}"]`).addClass('active').attr('aria-selected', 'true');
});

$(document).on('click', '#toggleWeekOverview', function () {
    const $btn = $(this);
    const expanded = $btn.attr('aria-expanded') === 'true';

    if (expanded) {
        appState.weekOverviewTable.hide();
        $btn.text('+').attr('aria-expanded', 'false');
        localStorage.setItem('weekOverviewCollapsed', 'true');
    } else {
        appState.weekOverviewTable.show();
        $btn.text('-').attr('aria-expanded', 'true');
        localStorage.removeItem('weekOverviewCollapsed');
    }
});

$('.tabs').on('click', '.tab-btn', function () {
    const $btn = $(this);
    $('.tab-btn').removeClass('active').attr('aria-selected', 'false');
    $btn.addClass('active').attr('aria-selected', 'true');

    const day = Number($btn.data('day')) || 1;
    renderWorkoutDetails(day);
});

$(document).on('click', '.wt-increase, .wt-decrease', function () {
    const day = window.currentDay;
    const $btn = $(this);
    const $cell = $btn.closest('.weight-cell');
    const equipment = $cell.data('equipment');
    const exerciseName = $cell.data('name');
    const setIndex = Number($cell.data('set-index'));
    const exIndex = Number($cell.data('ex-index'));

    const opts = weightOptions[equipment];
    const $val = $cell.find('.wt-value');
    const cur = parseFloat($val.text()) || 0;
    const isBW = opts[0] === 'BW' || cur === 0;
    if (isBW) return;

    const idx = opts.findIndex(v => Number(v) === cur);
    let newIdx = idx;
    if ($btn.hasClass('wt-increase')) {
        newIdx = Math.min(opts.length - 1, (idx === -1 ? 0 : idx + 1));
    } else {
        newIdx = Math.max(0, (idx === -1 ? 0 : idx - 1));
    }

    const newVal = opts[newIdx];
    $val.text(`${newVal} Kg`);

    const tooltipText = `${equipment}: ${weightVariations[equipment]?.[newVal] || 'BW'}`;
    $val.attr('data-tooltip', tooltipText);

    exercises[exerciseName].weight = newVal;
});
