import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route exact from="/" to="/photos" />

            <Route path="/photos/*" element={<Photo />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
