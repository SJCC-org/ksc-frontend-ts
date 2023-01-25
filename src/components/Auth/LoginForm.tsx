import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { postSignIn } from '../../lib/api/auth';
import { ErrorMsg } from '../common';

interface LoginInfo {
  username: string;
  password: string;
}

interface LoginProps {
  setIsOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({ setIsOpenLogin }: LoginProps) => {
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const navigate = useNavigate();

  const { register, watch, handleSubmit } = useForm<LoginInfo>();

  const handleMoveRegister = () => {
    setIsOpenLogin(false);
    navigate('/register');
  };

  const handleSignIn = async () => {
    const res = await postSignIn(watch('username'), watch('password'));
    res?.data ? setIsOpenLogin(false) : setLoginErrorMsg('아이디와 비밀번호를 확인해주세요');
  };

  return (
    <LoginFormWrapper>
      <LoginModal>
        <LoginHeader>
          <CloseBlock>
            <CloseBtn type="button" onClick={() => setIsOpenLogin(false)}>
              <AiOutlineClose />
            </CloseBtn>
          </CloseBlock>
          <LoginTitle>로그인</LoginTitle>
        </LoginHeader>
        <LoginFormBlock onSubmit={handleSubmit(handleSignIn)}>
          <StyledInput type="text" placeholder="아이디를 입력해주세요" {...register('username')} />
          <StyledInput type="password" placeholder="비밀번호를 입력해주세요" {...register('password')} />
          <ErrorMsg errorMsg={loginErrorMsg} />
          <LoginBtn type="submit">로그인</LoginBtn>
        </LoginFormBlock>
        <ExtraInfo>
          <ExtraSpan>비밀번호 찾기</ExtraSpan>
          <ExtraRegisterSpan onClick={handleMoveRegister}>회원가입</ExtraRegisterSpan>
        </ExtraInfo>
      </LoginModal>
    </LoginFormWrapper>
  );
};

export default LoginForm;

const LoginFormWrapper = styled.main`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 10000;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const LoginModal = styled.section`
  width: 500px;
  height: 350px;

  background-color: white;
  border-radius: 7px;
`;

const LoginHeader = styled.header`
  width: 100%;
`;
const CloseBlock = styled.div`
  width: 100%;
  padding: 1rem 1rem 0 0;

  text-align: right;
`;
const CloseBtn = styled.button`
  border: none;
  background-color: transparent;

  svg {
    font-size: 20px;

    cursor: pointer;
  }
`;
const LoginTitle = styled.h2`
  text-align: center;
`;
const LoginFormBlock = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
`;
const LoginBtn = styled.button`
  width: 80%;
  padding: 0.7rem 0;

  border: none;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.Kakao_Color_Yellow};
  color: ${({ theme }) => theme.colors.Kakao_Color_Brown};
  font-size: 18px;
  font-weight: bold;

  cursor: pointer;
`;
const StyledInput = styled.input`
  width: 80%;
  padding: 0.7rem;
  margin-bottom: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.Kakao_Color_Gray_2};
  border-radius: 7px;

  outline: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.Kakao_Color_Yellow};
  }
`;
const ExtraInfo = styled.div`
  display: flex;
  justify-content: center;
`;
const ExtraSpan = styled.span`
  cursor: pointer;
`;
const ExtraRegisterSpan = styled.span`
  margin-left: 0.5rem;

  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;
