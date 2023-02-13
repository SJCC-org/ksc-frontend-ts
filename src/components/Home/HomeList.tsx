import styled from 'styled-components';

import { useGetStudylist } from '../../hooks/useGetStudyList';
import HomeItem from './HomeItem';

const HomeList = () => {
  const { studyInfo } = useGetStudylist();
  return (
    <HomeListWrapper>
      <HomeItemList>
        {studyInfo?.content?.length === 0 ? (
          <EmptyPage>스터디 목록이 없습니다</EmptyPage>
        ) : (
          studyInfo?.content.map(({ id, title, studyCategory, maxNum, recruitCompleted, createdDate, curNum }) => (
            <HomeItem
              key={id}
              id={id}
              title={title}
              studyCategory={studyCategory}
              maxNum={maxNum}
              recruitCompleted={recruitCompleted}
              createdDate={createdDate}
              curNum={curNum}
            />
          ))
        )}
      </HomeItemList>
    </HomeListWrapper>
  );
};

export default HomeList;

const HomeListWrapper = styled.main`
  display: flex;
`;
const HomeItemList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 50%;
  margin: 0 auto;
  margin-top: 84px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;
const EmptyPage = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  font-size: 25px;
  font-weight: bold;
`;
