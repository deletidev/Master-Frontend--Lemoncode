import { memberService } from '~/services/member-list';
import type { Data, MemberList } from '~/types';
import { getTotalPages, mapMemberListToVM } from '~/utils';

export default async function useMemberListApi() {
  const { item } = useCompanyStore();
  const memberList = ref<MemberList[]>([]);
  const totalPage = ref(1);
  const errors = ref<string>('');
  const response = await memberService
    .getList(item.company, item.page)
    .catch((error: Error) => {
      errors.value = error.message;
      return {
        data: []
      } as Data;
    });

  memberList.value = mapMemberListToVM(response.data);

  if (response.linkHeader) {
    totalPage.value = getTotalPages(response.linkHeader, item.page);
  }

  const setMemberList = async (company: string, page: number) => {
    errors.value = '';
    const response = await memberService
      .getList(company, page)
      .catch((error: Error) => {
        errors.value = error.message;
        return {
          data: []
        } as Data;
      });
    memberList.value = mapMemberListToVM(response.data);

    if (response.linkHeader) {
      totalPage.value = getTotalPages(response.linkHeader, item.page);
    }
  };
  return { memberList, setMemberList, errors, totalPage };
}
