import React from 'react';
import { ValidateOrderComponent } from './validate-order.component';
import { useOrderContext } from '@/core/providers';
import { mockOrder } from './mock-order';
import { useInfoReducer } from './validate-order.reducer';

export const ValidateOrderContainer: React.FC = () => {
  const { order, setOrder } = useOrderContext();
  const [orderState, dispatch] = React.useReducer(useInfoReducer, {
    totalPrice: 0,
    totalPercentage: 0,
    items: order.items
  });

  React.useEffect(() => {
    setOrder(mockOrder);
    dispatch({ type: 'setItems', payload: order.items });
    dispatch({ type: 'setTotalPrice', payload: order.items });
    dispatch({ type: 'setTotalPercentage', payload: order.items });
  }, [order.items]);

  return (
    <ValidateOrderComponent
      orderState={orderState}
      dispatch={dispatch}
    ></ValidateOrderComponent>
  );
};
