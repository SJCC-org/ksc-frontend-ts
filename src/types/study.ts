export type ContentData = {
  id: number;
  title: string;
  studyCategory: string;
  maxNum: number;
  recruitCompleted: boolean;
  createdDate: string;
  curNum: number;
};

export interface StudyInfo {
  data: {
    content: ContentData[];
  };
}
