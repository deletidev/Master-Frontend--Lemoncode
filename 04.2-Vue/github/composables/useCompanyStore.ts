interface CompanyStore {
  company: string;
  page: number;
  scroll: number;
}

export const useCompanyStore = defineStore('company', () => {
  const item = reactive<CompanyStore>({
    company: 'lemoncode',
    page: 1,
    scroll: 0
  });

  const setCompanyName = (company: string) => {
    item.company = company;
  };

  const setCompanyPage = (page: number) => {
    item.page = page;
  };
  const setCompanyScroll = (scroll: number) => {
    item.scroll = scroll;
  };
  return {
    item,
    setCompanyName,
    setCompanyPage,
    setCompanyScroll
  };
});
