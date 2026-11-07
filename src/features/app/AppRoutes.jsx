import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { WorkoutFeature } from '../workouts/WorkoutFeature';
import { CalendarFeature } from '../calendar/CalendarFeature';
import { ExerciseLibraryFeature } from '../exercises/ExerciseLibraryFeature';
import { AuthFeature } from '../auth/AuthFeature';
import { WorkoutBuilderFeature } from '../workout-builder/WorkoutBuilderFeature';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WorkoutFeature />} />
      <Route path="/builder" element={<WorkoutBuilderFeature />} />
      <Route path="/calendar" element={<CalendarFeature />} />
      <Route path="/exercises" element={<ExerciseLibraryFeature />} />
      <Route path="/login" element={<AuthFeature />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
