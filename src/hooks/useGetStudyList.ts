import useSWR from 'swr';

import { kakaoGetFetcher } from '../lib/axios';
import { StudyInfo } from '../types/study';

export const useGetStudylist = () => {
  const { data } = useSWR<StudyInfo>('/v1/study?page=0&size=100', kakaoGetFetcher, {
    errorRetryCount: 3,
  });
  return {
    studyInfo: data?.data,
  };
};
