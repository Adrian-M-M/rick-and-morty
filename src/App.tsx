import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './pages/Router';

import 'semantic-ui-css/semantic.min.css';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
