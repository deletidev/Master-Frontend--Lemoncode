import { MockOrder } from './validate-order.vm';

export const mockOrder: MockOrder = {
  header: {
    id: '1235467',
    supplier: 'Repuestos S.A',
    date: new Date('2024-05-12T21:30:00')
  },
  items: [
    {
      id: 0,
      checked: false,
      state: 'Válido',
      description: 'Bolígrafos Negros',
      amount: 200
    },
    {
      id: 1,
      checked: false,
      state: 'Válido',
      description: 'Reactivos Maquinaria',
      amount: 2354
    },
    {
      id: 2,
      checked: false,
      state: 'Pendiente',
      description: 'Recambios Impresión',
      amount: 135
    },
    {
      id: 3,
      checked: false,
      state: 'Pendiente',
      description: 'Soportes Plataforma',
      amount: 540
    },
    {
      id: 4,
      checked: false,
      state: 'Válido',
      description: 'Bolígrafos Azules',
      amount: 305
    },
    {
      id: 5,
      checked: false,
      state: 'Pendiente',
      description: 'Anillos Luz',
      amount: 1650
    },
    {
      id: 6,
      checked: false,
      state: 'Pendiente',
      description: 'Soportes Monitor',
      amount: 1040
    },
    {
      id: 7,
      checked: false,
      state: 'Válido',
      description: 'Clips',
      amount: 50
    },
    {
      id: 8,
      checked: false,
      state: 'Pendiente',
      description: 'Folios A4',
      amount: 135
    },
    {
      id: 9,
      checked: false,
      state: 'Pendiente',
      description: 'Folios A5',
      amount: 540
    }
  ]
};
