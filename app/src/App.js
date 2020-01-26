import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from './AppStyle';

import Login from './components/Login/Login';
import SideMenu from './components/SideMenu/SideMenu';

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <CssBaseline />
    <SideMenu />

      <main className={classes.content}>
        <div className={classes.toolbar} />
            {/* Route between screens */}
            <Login />

      </main>
    </div>
  );
}