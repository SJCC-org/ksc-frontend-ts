import React from 'react';

import Router from './components/common/Router';
import { GlobalStyle } from './styles/globalStyle';

const App = () => (
  <div>
    <GlobalStyle />
    <Router />
  </div>
);

export default App;
