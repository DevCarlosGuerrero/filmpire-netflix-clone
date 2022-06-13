import React from 'react';
import { CssBaseline } from '@mui/material';
import useStyles from './styles';
// import { Routes, Route } from 'react-router-dom';

import { NavBar } from '.';
// import { Actors, MovieInformation, Movies, Profile } from '../pages';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className="toolbar">Hello Toolbar</div>
      </main>
    </div>
  );
}

export default App;
