import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LoginForm } from '../Auth';

const Header = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {isOpenLogin && <LoginForm setIsOpenLogin={setIsOpenLogin} />}
      <HeaderWrapper>
        <HeaderTitle onClick={() => navigate('/')}>
          <HeaderKakao>카카오</HeaderKakao>
          <HeaderStudy>클라우드 스쿨 스터디</HeaderStudy>
        </HeaderTitle>
        <HeaderButtonBlock>
          <HelpBtnBlock>
            <HeaderBtn type="button">문의사항</HeaderBtn>
          </HelpBtnBlock>
          <HeaderBtn type="button" onClick={() => setIsOpenLogin(!isOpenLogin)}>
            로그인
          </HeaderBtn>
        </HeaderButtonBlock>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;
  padding: 0 3rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.Kakao_Color_Gray_1};

  @media (max-width: 425px) {
    padding: 0 1rem;
  }
`;

const HeaderTitle = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;

    h2 {
      margin: 0;

      @media (max-width: 460px) {
        font-size: 20px;
      }
    }
  }

  cursor: pointer;
`;
const HeaderKakao = styled.h2`
  color: ${({ theme }) => theme.colors.Kakao_Color_Yellow};
`;
const HeaderStudy = styled.h2`
  color: ${({ theme }) => theme.colors.Kakao_Color_Brown};
`;
const HeaderButtonBlock = styled.div`
  display: flex;
  align-items: center;
`;
const HelpBtnBlock = styled.div`
  border-right: 2px solid ${({ theme }) => theme.colors.Kakao_Color_Yellow};
`;

const HeaderBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.Kakao_Color_Brown};
  font-size: 18px;
  font-weight: bold;

  cursor: pointer;

  @media (max-width: 460px) {
    padding: 0.5rem 0.7rem;

    font-size: 16px;
  }
`;
