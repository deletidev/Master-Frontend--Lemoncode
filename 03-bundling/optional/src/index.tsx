import React from 'react';
import { createRoot } from 'react-dom/client';
import classes from './styles.scss';
import logo from './assets/logo_2.png';

console.log(`Api base: ${process.env.API_BASE}`);

const mio = document.getElementById('root');
if (mio) {
  const root = createRoot(mio);
  root.render(
    <div>
      <h1 className={classes.color}>Hello from React DOM</h1>
      <img src={logo} alt="" />
    </div>
  );
}
