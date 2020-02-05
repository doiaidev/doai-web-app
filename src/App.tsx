import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history.js';
import Routes from './routes'

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
    </>
  );
}

export default App;
