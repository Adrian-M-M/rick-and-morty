import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

const RouterLayout: FunctionComponent = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default RouterLayout;
