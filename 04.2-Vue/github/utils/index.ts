import type { Member, MemberApi, MemberList, MemberListApi } from '~/types';

export const mapMemberToVM = (data: MemberApi): Member => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
  htmlUrl: data.html_url,
  name: data.name,
  bio: data.bio,
  email: data.email
});

export const mapMemberListToVM = (data: MemberListApi[]): MemberList[] => {
  return data.map(mapMemberListApiToVM);
};

const mapMemberListApiToVM = (data: MemberListApi): MemberList => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url
});

export const getTotalPages = (linkHeader: string, page: number): number => {
  const lastPattern = /(?<=<)([\S]*)(?=>; rel="Last")/i;
  const last = linkHeader.match(lastPattern);
  const regex = /page=(\d+)/;

  if (last) {
    const match = last[0].match(regex);
    if (match) {
      return parseInt(match[1]);
    }
  }
  return page;
};
