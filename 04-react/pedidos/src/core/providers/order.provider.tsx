import React from 'react';

import {
  MockOrder,
  createEmptyOrder
} from '@/pods/validate-order/validate-order.vm';

interface Props {
  children: React.ReactNode;
}

interface OrderContextModel {
  order: MockOrder;
  setOrder: (order: MockOrder) => void;
}

const OrderContext = React.createContext<OrderContextModel>({
  order: createEmptyOrder(),
  setOrder: () => {}
});

export const OrderProvider: React.FC<Props> = props => {
  const { children } = props;
  const [order, setOrder] = React.useState<MockOrder>(createEmptyOrder());

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => React.useContext(OrderContext);
