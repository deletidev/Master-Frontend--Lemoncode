<template>
  <h1>Buscar miembros de compañias de Github</h1>
  <FormMemberList @formSubmit="handleSubmit"></FormMemberList>
  <MemberList :memberListItem="memberList" :errors="errors"></MemberList>
  <Pagination
    @pageClick="handleClick"
    :page="item.page"
    :totalPage="totalPage"
  ></Pagination>
</template>
<script setup lang="ts">
const { item, setCompanyName, setCompanyPage, setCompanyScroll } =
  useCompanyStore();

const { memberList, setMemberList, errors, totalPage } =
  await useMemberListApi();

const handleSubmit = async (value: string) => {
  setCompanyName(value);
  setCompanyPage(1);
  setMemberList(value, 1);
  setCompanyScroll(0);
};
const handleClick = (page: number) => {
  setCompanyPage(page);
  setMemberList(item.company, page);
  setCompanyScroll(0);
};
</script>
