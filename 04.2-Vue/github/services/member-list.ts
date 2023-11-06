import type { Data, MemberApi, MemberListApi } from '~/types';
import { members } from './memebersmock';

export const memberService = {
  async getList(value: string, page: number) {
    const response = await fetch(
      `https://api.github.com/orgs/${value}/members?page=${page}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('No existe una compañia con el nombre ' + value);
      }
      if (response.status === 403) {
        throw new Error(
          'Se ha excedido el límite de búsquedas en la Api, vuelva a intentarlo más tarde'
        );
      }
      throw new Error(
        'Se ha producido un error, vuelva a intentarlo más tarde'
      );
    }

    const linkHeader = response.headers.get('Link');
    const data: MemberListApi[] = await response.json();

    if (!linkHeader) {
      return { linkHeader: undefined, data };
    }
    return { linkHeader, data } as Data;
  },

  async getMemberByLogin(login: string) {
    const response = await $fetch<MemberApi>(
      `https://api.github.com/users/${login}`
    );

    return response;
  }
};
