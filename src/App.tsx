import { ThemeProvider } from 'styled-components';

import Router from './components/common/Router';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </div>
);

export default App;
