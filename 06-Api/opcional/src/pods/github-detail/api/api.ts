import axios from 'axios';
import { MemberApi } from './api.model';

export const catchMemberApi = (login: string): Promise<MemberApi> => {
  return axios
    .get(`https://api.github.com/users/${login}`)
    .then(response => response.data);
};
