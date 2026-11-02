import React from 'react';

import './App.css';

import { AppStateProvider } from './features/app/AppStateProvider';
import { AppRoutes } from './features/app/AppRoutes';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <AppStateProvider>
      <div className="app-shell">
        <Menu />

        <main className="app-main-content">
          <AppRoutes />
        </main>
      </div>
    </AppStateProvider>
  );
}

export default App;
