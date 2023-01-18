import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

interface RegisterInfo {
  name: string;
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
  code: string;
}

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterInfo>();

  const handleSubmitRegister: SubmitHandler<RegisterInfo> = (data) => {
    console.log(data);
  };
  return (
    <RegisterFormWrapper>
      <RegisterFormBlock onSubmit={handleSubmit(handleSubmitRegister)}>
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
            <DuplivateBtn type="button">중복확인</DuplivateBtn>
          </DuplicateBlock>
        </InputBlock>
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
            {...register('passwordConfirm', { required: true })}
          />
        </InputBlock>
        <InputBlock>
          <InputLabelText>이메일</InputLabelText>
          <DuplicateBlock>
            <StyledInput type="email" placeholder="이메일을 입력해주세요" {...register('email', { required: true })} />
            <DuplivateBtn type="button">확인</DuplivateBtn>
          </DuplicateBlock>
        </InputBlock>
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
const DuplivateBtn = styled.button`
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
const ErrorMessageBlock = styled.div``;
