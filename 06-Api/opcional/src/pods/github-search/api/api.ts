import axios from 'axios';
import { MemberApi } from './api.model';

interface Data {
  linkHeader?: string;
  data: MemberApi[];
}
export const catchMembersApi = async (
  value: string,
  page: number
): Promise<Data> => {
  const { data, headers } = await axios.get(
    `https://api.github.com/orgs/${value}/members?page=${page}`
  );

  const linkHeader = headers['link'];

  if (!linkHeader) {
    return { linkHeader: undefined, data };
  }
  return { linkHeader, data };
};
