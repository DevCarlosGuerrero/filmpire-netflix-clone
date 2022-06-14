import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { App } from './components';
import { Actors, MovieInformation, Movies, Profile } from './pages';

const theme = createTheme([]);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
