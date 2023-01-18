import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, Register } from '../../pages';
import { Layout } from '../Layout';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
