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
