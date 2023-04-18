import React, { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../../components/Layout';

import Characters from '../Characters';
import Locations from '../Locations';
import Episodes from '../Episodes';
import Home from '../Home';

const Router: FunctionComponent = () => (
  <Routes>
    <Route path='/' element={<Navigate to='/home' replace />} />
    <Route path='/' element={<Layout />}>
      <Route path='home' element={<Home />} />
      <Route path='characters' element={<Characters />} />
      <Route path='episodes' element={<Episodes />} />
      <Route path='locations' element={<Locations />} />
    </Route>
  </Routes>
);

export default Router;
