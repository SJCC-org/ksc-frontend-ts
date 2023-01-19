import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { getDuplicateUser, postEmailAuthentication, postEmailCode, postSignUp } from '../../lib/api/auth';

interface RegisterInfo {
  name: string;
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
  code: string;
}

const RegisterForm = () => {
  const [openEmail, setOpenEmail] = useState(false);
  const [codeMessage, setCodeMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);

  const { register, watch, handleSubmit } = useForm<RegisterInfo>();

  const navigate = useNavigate();

  const handleDuplicateUser = async () => {
    const res = await getDuplicateUser(watch('username'));
    res?.data ? setErrorMessage('아이디가 중복됩니다.') : setErrorMessage('사용가능한 아이디 입니다.');
  };

  const handleCheckPassword = () => {
    if (watch('password') !== watch('passwordConfirm')) setCheckPassword(!checkPassword);
  };

  const handleEmailAuthentication = async () => {
    const res = await postEmailAuthentication(watch('email'));
    res?.status && setOpenEmail(!openEmail);
  };

  const handleCheckCode = async () => {
    const res = await postEmailCode(watch('email'), watch('code'));
    res?.data ? setCodeMessage('인증코드가 일치합니다.') : setCodeMessage('인증코드가 일치하지 않습니다.');
  };

  const handleSignUp = async () => {
    const res = await postSignUp(watch('username'), watch('password'), watch('name'), watch('email'));
    res?.data && navigate('/');
  };

  return (
    <RegisterFormWrapper>
      <RegisterFormBlock onSubmit={handleSubmit(handleSignUp)}>
        <InputBlock>
          <InputLabelText>이름</InputLabelText>
          <StyledInput type="text" placeholder="이름을 입력해주세요" {...register('name', { required: true })} />
        </InputBlock>
        <InputBlock>
          <InputLabelText>아이디</InputLabelText>
          <DuplicateBlock>
            <StyledInput
              type="text"
              placeholder="아이디를 입력해주세요"
              {...register('username', { required: true })}
            />
            <DuplicateBtn type="button" onClick={handleDuplicateUser}>
              중복확인
            </DuplicateBtn>
          </DuplicateBlock>
        </InputBlock>
        <ErrorMessageBlock>{errorMessage}</ErrorMessageBlock>
        <InputBlock>
          <InputLabelText>비밀번호</InputLabelText>
          <StyledInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('password', { required: true })}
          />
        </InputBlock>
        <InputBlock>
          <InputLabelText>비밀번호 확인</InputLabelText>
          <StyledInput
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            onKeyUp={handleCheckPassword}
            {...register('passwordConfirm', { required: true })}
          />
        </InputBlock>
        {checkPassword && <ErrorMessageBlock>비밀번호가 일치하지 않습니다.</ErrorMessageBlock>}
        <InputBlock>
          <InputLabelText>이메일</InputLabelText>
          <DuplicateBlock>
            <StyledInput type="email" placeholder="이메일을 입력해주세요" {...register('email', { required: true })} />
            <DuplicateBtn type="button" onClick={handleEmailAuthentication}>
              인증하기
            </DuplicateBtn>
          </DuplicateBlock>
        </InputBlock>
        {openEmail && (
          <InputBlock>
            <DuplicateBlock>
              <StyledInput type="text" placeholder="인증코드를 입력해주세요" {...register('code')} />
              <DuplicateBtn type="button" onClick={handleCheckCode}>
                확인
              </DuplicateBtn>
            </DuplicateBlock>
          </InputBlock>
        )}
        <ErrorMessageBlock>{codeMessage}</ErrorMessageBlock>
        <SubmitBtn type="submit">회원가입</SubmitBtn>
      </RegisterFormBlock>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;

const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 2rem;
`;

const RegisterFormBlock = styled.form`
  width: 400px;

  @media (max-width: 430px) {
    width: 100%;
  }
`;
const InputBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
`;
const DuplicateBlock = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const DuplicateBtn = styled.button`
  width: 20%;
  margin-left: 1rem;

  border: none;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.Kakao_Color_Yellow};
  color: ${({ theme }) => theme.colors.Kakao_Color_Brown};
  font-size: 13px;
  font-weight: bold;

  cursor: pointer;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0.7rem 0;
    margin: 0.5rem 0;
  }
`;
const InputLabelText = styled.label`
  margin-bottom: 0.5rem;

  font-size: 14px;
`;
const SubmitBtn = styled.button`
  width: 100%;
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
  width: 100%;
  padding: 0.7rem;

  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.Kakao_Color_Gray_2};

  outline: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.Kakao_Color_Yellow};
  }
`;
const ErrorMessageBlock = styled.div`
  color: red;
  font-weight: bold;

  text-align: center;
`;
