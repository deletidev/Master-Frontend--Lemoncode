export interface Item {
  id: number;
  state: State;
  checked: Boolean;
  description: string;
  amount: number;
}
export interface HeaderOrder {
  id: string;
  supplier: string;
  date: Date;
}
export interface MockOrder {
  header: HeaderOrder;
  items: Item[];
}

export type State = 'Válido' | 'Pendiente';

export const createEmptyOrder = (): MockOrder => ({
  header: {
    id: '',
    supplier: '',
    date: new Date('2024-05-12T21:30:00')
  },
  items: [
    { id: 0, checked: false, state: 'Pendiente', description: '', amount: 0 }
  ]
});
