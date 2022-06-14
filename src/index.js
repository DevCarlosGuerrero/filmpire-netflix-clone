import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { App } from './components';
// import { Actors, MovieInformation, Movies, Profile } from './pages';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const theme = createTheme([]);

root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
