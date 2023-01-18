import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../common';

const layout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

export default layout;
