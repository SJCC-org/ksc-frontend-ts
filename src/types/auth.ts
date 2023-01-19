export interface DuplicateResInfo {
  status: string;
  data: boolean;
}

export interface EmailResInfo {
  status: string;
}

export interface CodeResInfo {
  status: string;
  data: boolean;
}

type SignUpData = {
  id: number;
  domain: string;
};

export interface SignUpResInfo {
  status: string;
  data: SignUpData;
}

type SignInData = {
  accessToken: string;
  refreshToken: string;
};
export interface SignInInfo {
  status: string;
  data: SignInData;
}
