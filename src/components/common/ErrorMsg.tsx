import styled from 'styled-components';

interface ErrorMsgProps {
  errorMsg?: string;
}

const ErrorMsg = (props: ErrorMsgProps) => {
  const { errorMsg } = props;
  return <ErrorMsgWrapper>{errorMsg}</ErrorMsgWrapper>;
};

export default ErrorMsg;

const ErrorMsgWrapper = styled.div`
  margin-bottom: 0.3rem;

  color: ${({ theme }) => theme.colors.Error_Color_Red};
  font-weight: bold;

  text-align: center;
`;
