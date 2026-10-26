import React from 'react';
import { getLocalDateKey } from '../utils';
import './CalendarPage.css';

const weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function CalendarPage({ events }) {
    const [visibleMonth, setVisibleMonth] = React.useState(() => {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), 1);
    });
    const [selectedDate, setSelectedDate] = React.useState(() => getLocalDateKey());
    const year = visibleMonth.getFullYear();
    const month = visibleMonth.getMonth();
    const firstWeekday = (new Date(year, month, 1).getDay()) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthLabel = visibleMonth.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
    const eventsByDate = events.reduce((groupedEvents, event) => {
        groupedEvents[event.date] = [...(groupedEvents[event.date] || []), event];
        return groupedEvents;
    }, {});
    const selectedEvents = (eventsByDate[selectedDate] || []).reduce((groupedEvents, event) => {
        if (event.type !== 'weight') {
            groupedEvents.push(event);
            return groupedEvents;
        }

        const existingEvent = groupedEvents.find(
            (groupedEvent) => groupedEvent.type === 'weight' && groupedEvent.exerciseName === event.exerciseName
        );
        if (existingEvent) {
            existingEvent.newWeight = event.newWeight;
        } else {
            groupedEvents.push({ ...event });
        }
        return groupedEvents;
    }, []);
    const selectedDateLabel = new Date(`${selectedDate}T12:00:00`).toLocaleDateString(undefined, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    function moveMonth(offset) {
        setVisibleMonth(new Date(year, month + offset, 1));
    }

    return (
        <section className="calendar-page" aria-labelledby="calendar-title">
            <div className="calendar-heading">
                <div>
                    <p className="calendar-eyebrow">YOUR TRAINING HISTORY</p>
                    <h2 id="calendar-title">Activity calendar</h2>
                    <p className="calendar-description">Completed workouts and exercise weight changes, all in one place.</p>
                </div>
                <div className="calendar-month-controls" aria-label="Calendar month controls">
                    <button type="button" onClick={() => moveMonth(-1)} aria-label="Previous month">‹</button>
                    <strong aria-live="polite">{monthLabel}</strong>
                    <button type="button" onClick={() => moveMonth(1)} aria-label="Next month">›</button>
                </div>
            </div>

            <div className="calendar-layout">
                <div className="calendar-card">
                    <div className="calendar-grid calendar-weekdays" aria-hidden="true">
                        {weekdayLabels.map((label) => <div key={label}>{label}</div>)}
                    </div>
                    <div className="calendar-grid calendar-days">
                        {Array.from({ length: firstWeekday }, (_, index) => (
                            <div className="calendar-day calendar-day-empty" key={`empty-${index}`} aria-hidden="true" />
                        ))}
                        {Array.from({ length: daysInMonth }, (_, index) => {
                            const day = index + 1;
                            const date = getLocalDateKey(new Date(year, month, day));
                            const dayEvents = eventsByDate[date] || [];
                            const hasWorkout = dayEvents.some((event) => event.type === 'workout');
                            const hasWeightChange = dayEvents.some((event) => event.type === 'weight');
                            const isToday = date === getLocalDateKey();

                            return (
                                <button
                                    type="button"
                                    key={date}
                                    className={`calendar-day${date === selectedDate ? ' selected' : ''}${isToday ? ' today' : ''}`}
                                    aria-pressed={date === selectedDate}
                                    aria-label={`${new Date(year, month, day).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}${dayEvents.length ? `, ${dayEvents.length} activities` : ''}`}
                                    onClick={() => setSelectedDate(date)}
                                >
                                    <span className="calendar-day-number">{day}</span>
                                    <span className="calendar-event-dots" aria-hidden="true">
                                        {hasWorkout && <span className="event-dot workout-dot" />}
                                        {hasWeightChange && <span className="event-dot weight-dot" />}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                    <div className="calendar-legend">
                        <span><i className="event-dot workout-dot" /> Completed workout</span>
                        <span><i className="event-dot weight-dot" /> Weight change</span>
                    </div>
                </div>

                <aside className="calendar-events" aria-live="polite">
                    <h3>{selectedDateLabel}</h3>
                    {selectedEvents.length === 0 ? (
                        <div className="calendar-empty-state">
                            <span className="empty-calendar-icon" aria-hidden="true">＋</span>
                            <p>No activity logged for this day.</p>
                            <span>Complete a workout or update an exercise weight to see it here.</span>
                        </div>
                    ) : (
                        <ul className="event-list">
                            {selectedEvents.map((event) => (
                                <li className={`event-card ${event.type}`} key={event.id}>
                                    <span className="event-card-icon" aria-hidden="true">{event.type === 'workout' ? '✓' : '↕'}</span>
                                    <div>
                                        <strong>{event.type === 'workout' ? 'Workout completed' : 'Exercise weight updated'}</strong>
                                        {event.type === 'workout' ? (
                                            <p>Day {event.workoutDay}: {event.workoutTitle}</p>
                                        ) : (
                                            <p>{event.exerciseName}: {event.previousWeight} kg → {event.newWeight} kg</p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </aside>
            </div>
        </section>
    );
}

export default CalendarPage;
