import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

function Menu() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <aside className={`app-sidebar${isSidebarOpen ? ' open' : ''}`}>
          <button
              type="button"
              className="sidebar-toggle"
              aria-label={isSidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setIsSidebarOpen((open) => !open)}
            >
              {isSidebarOpen ? '✕' : '☰'}
            </button>
          {isSidebarOpen && (
            <div className="sidebar-header">
              <p className="app-eyebrow">YOUR TRAINING SPACE</p>
              <h1>Workout Planner</h1>
            </div>
          )}

          <nav className="app-navigation" aria-label="Main navigation">
            <NavLink to="/login" onClick={() => setIsSidebarOpen(false)}>
              Login
            </NavLink>
            <NavLink to="/" end onClick={() => setIsSidebarOpen(false)}>
              Workouts
            </NavLink>
            <NavLink to="/calendar" onClick={() => setIsSidebarOpen(false)}>
              Calendar
            </NavLink>
            <NavLink to="/exercises" onClick={() => setIsSidebarOpen(false)}>
              Exercises
            </NavLink>
          </nav>
        </aside>
    );
}

export default Menu;