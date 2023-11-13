import { Item, State } from './validate-order.vm';

export interface Order {
  totalPrice: number;
  totalPercentage: number;
  items: Item[];
}

export interface Action {
  type: ActionIds;
  id?: number;
  state?: State;
  amount?: number;
  payload: any;
}

type ActionIds =
  | 'setItems'
  | 'setTotalPrice'
  | 'setTotalPercentage'
  | 'setItemsState'
  | 'setItemsChequed'
  | 'setItemsAmount'
  | 'resetItemsChequed';

const calctotalPrice = (items: Item[]) =>
  items.reduce(
    (acc, item) => (item.state === 'Válido' ? (acc += item.amount) : acc),
    0
  );

const calctotalPercentage = (items: Item[]) =>
  (items.reduce(
    (acc, item) => (item.state === 'Válido' ? (acc += 1) : acc),
    0
  ) /
    items.length) *
  100;

const chageChecked = (items: Item[], id: number): Item[] => {
  return items.map(t => {
    if (t.id === id) {
      return { ...t, checked: !t.checked };
    } else {
      return t;
    }
  });
};

const chageState = (items: Item[], state: State): Item[] =>
  items.map(item => {
    if (item.checked) {
      return { ...item, state };
    } else {
      return item;
    }
  });

const chageAmount = (items: Item[], id: number, amount: number): Item[] =>
  items.map(t => {
    if (t.id === id) {
      return { ...t, amount };
    } else {
      return t;
    }
  });

const resetChecked = (items: Item[]) =>
  items.map(item => ({ ...item, checked: false }));

export const useInfoReducer = (state: Order, action: Action): Order => {
  switch (action.type) {
    case 'setItems':
      return {
        ...state,
        items: action.payload
      };
    case 'setTotalPrice':
      return {
        ...state,
        totalPrice: calctotalPrice(state.items)
      };
    case 'setTotalPercentage':
      return {
        ...state,
        totalPercentage: calctotalPercentage(state.items)
      };
    case 'setItemsChequed':
      if (action.id !== undefined) {
        return {
          ...state,
          items: chageChecked(state.items, action.id)
        };
      }
      return state;
    case 'resetItemsChequed':
      return {
        ...state,
        items: resetChecked(state.items)
      };
    case 'setItemsState':
      if (action.state) {
        return {
          ...state,
          items: chageState(state.items, action.state)
        };
      }
      return state;
    case 'setItemsAmount':
      if (action.id !== undefined && action.amount !== undefined) {
        return {
          ...state,
          items: chageAmount(state.items, action.id, action.amount)
        };
      }
      return state;
    default:
      return state;
  }
};
