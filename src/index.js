import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { App } from './components';
import { Actors, MovieInformation, Movies, Profile } from './pages';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie/:id" element={<MovieInformation />} />
      <Route path="/actors/:id" element={<Actors />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
