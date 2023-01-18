import { ReactNode } from 'react';
import styled from 'styled-components';

interface MainLayoutChildren {
  children: ReactNode;
}
const MainLayout = ({ children }: MainLayoutChildren) => <MainLayoutWrapper>{children}</MainLayoutWrapper>;

export default MainLayout;

const MainLayoutWrapper = styled.main`
  width: 1200px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 2rem;
  }
`;
