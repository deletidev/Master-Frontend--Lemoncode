import React from 'react';
import { MemberEntity } from '@/pods/github-search/github-search.vm';
import { totalPages } from '@/pods/github-search/github-search.business';
import { mapMemberListToVM } from '@/pods/github-search/github-search.mappers';
import { catchMembersApi } from '@/pods/github-search/api/api';

export const useMemberPage = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [error, setError] = React.useState<string>('');
  const [totalPage, setTotalPage] = React.useState(1);

  const updateMembersPage = (userCompany: string, page: number) => {
    catchMembersApi(userCompany, page)
      .then(result => {
        setError('');
        if (result.data.length > 0) {
          setMembers(mapMemberListToVM(result.data));
        } else {
          throw new Error(
            'Esta compañía no tiene miembros o no tiene datos públicos'
          );
        }
        if (result.linkHeader) {
          setTotalPage(totalPages(result.linkHeader, page));
        }
      })
      .catch(error => {
        setMembers([]);
        if (error.response?.status === 403) {
          error.message =
            'Se ha excedido el límite de búsquedas en la Api, vuelva a intentarlo más tarde';
        }
        if (error.response?.status === 404) {
          error.message = 'No existe una compañia con el nombre ' + userCompany;
        }
        setError(error.message);
      });
  };

  return {
    members,
    totalPage,
    setTotalPage,
    updateMembersPage,
    error,
    setError
  };
};
