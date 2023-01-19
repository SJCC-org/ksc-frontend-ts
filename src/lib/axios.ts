import axios from 'axios';

export const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    'Content-type': 'application/json',
  },
});

export const kakaoGetFetcher = (url: string) => client.get(url).then((res) => res.data);
