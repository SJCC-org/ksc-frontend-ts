import { CodeResInfo, DuplicateResInfo, EmailResInfo, SignUpResInfo } from '../../types/auth';
import { client } from '../axios';

export const getDuplicateUser = async (username: string) => {
  try {
    const response = await client.get<DuplicateResInfo>(`/v1/account/exists/${username}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const postEmailAuthentication = async (email: string) => {
  try {
    const response = await client.post<EmailResInfo>('v1/email/auth', { email });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const postEmailCode = async (email: string, code: string) => {
  try {
    const response = await client.post<CodeResInfo>('v1/email/verify', { email, code });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const postSignUp = async (username: string, password: string, name: string, email: string) => {
  try {
    const response = await client.post<SignUpResInfo>('/v1/members', { username, password, name, email });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
