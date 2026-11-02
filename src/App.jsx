import React from 'react';
import { NavLink } from 'react-router-dom';

import './App.css';

import { AppStateProvider } from './features/app/AppStateProvider';
import { AppRoutes } from './features/app/AppRoutes';

function App() {
  return (
    <AppStateProvider>
      <div className="App">
        <header className="app-header">
          <div>
            <p className="app-eyebrow">YOUR TRAINING SPACE</p>
            <h1>Workout Planner</h1>
          </div>
          <nav className="app-navigation" aria-label="Main navigation">
            <NavLink to="/login">
              Login
            </NavLink>
            <NavLink to="/" end>
              Workouts
            </NavLink>
            <NavLink to="/calendar">
              Calendar
            </NavLink>
            <NavLink to="/exercises">
              Exercises
            </NavLink>
          </nav>
        </header>
        <main>
          <AppRoutes />
        </main>
      </div>
    </AppStateProvider>
  );
}

export default App;
