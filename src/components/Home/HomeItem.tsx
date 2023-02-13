import styled from 'styled-components';

import { ContentData } from '../../types/study';

const HomeItem = ({ title, studyCategory, maxNum, recruitCompleted, createdDate, curNum }: ContentData) => (
  <HomeItemWrapper>
    <HomeStudyTop>
      <HomeStudyInfo>
        <HomeStudyCategory>{studyCategory}</HomeStudyCategory>
      </HomeStudyInfo>
      <HomeStudyDate>{createdDate.substring(0, 10)}</HomeStudyDate>
    </HomeStudyTop>
    <HomeStudyTitleBlock>
      <HomeStudyTitle>{title}</HomeStudyTitle>
    </HomeStudyTitleBlock>
    <HomeStudyItemNum>
      <HomeStudyStatus>{recruitCompleted}</HomeStudyStatus>
      <span>{curNum}</span>
      <span>/</span>
      <span>{maxNum}</span>
    </HomeStudyItemNum>
  </HomeItemWrapper>
);

export default HomeItem;

const HomeItemWrapper = styled.article`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;

  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.Background_Color_White};

  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  cursor: pointer;
`;
const HomeStudyTop = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
`;
const HomeStudyInfo = styled.div`
  display: flex;
  align-items: center;
`;
const HomeStudyCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1rem;
  margin-right: 0.5rem;

  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.Kakao_Color_Yellow};
  font-size: 14px;
`;
const HomeStudyDate = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.Kakao_Color_Gray_3};
`;
const HomeStudyTitleBlock = styled.header`
  width: 100%;
`;
const HomeStudyTitle = styled.h3`
  margin: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const HomeStudyItemNum = styled.div`
  width: 100%;

  text-align: right;
`;
const HomeStudyStatus = styled.div`
  margin-bottom: 0.3rem;

  color: ${({ theme }) => theme.colors.Kakao_Color_Brown};
  font-weight: bold;
`;
