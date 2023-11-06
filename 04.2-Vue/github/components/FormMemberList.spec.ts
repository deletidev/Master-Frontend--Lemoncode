import { render, screen, fireEvent } from '@testing-library/vue';
import FormMemberListVue from './FormMemberList.vue';
import { createPinia, setActivePinia } from 'pinia';

describe('FormMemberListVue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('should render the form with search input value "lemoncode"', () => {
    //Act
    render(FormMemberListVue);
    const search = screen.getByRole('searchbox') as HTMLInputElement;

    //Assert
    expect(search.value).toEqual('lemoncode');
  });

  it('should change the value of the search input', async () => {
    //Act
    render(FormMemberListVue);

    const search = screen.getByRole('searchbox') as HTMLInputElement;

    //Assert
    await fireEvent.update(search, 'Facebook');
    expect(search.value).toEqual('Facebook');
  });

  it('shoud render the form with search input value "Facebook"', async () => {
    //Act
    const company = useCompanyStore();

    await company.setCompanyName('Facebook');
    render(FormMemberListVue);
    const search = screen.getByRole('searchbox') as HTMLInputElement;

    //Assert
    expect(search.value).toEqual('Facebook');
  });
});
