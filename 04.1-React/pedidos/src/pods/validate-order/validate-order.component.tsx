import React from 'react';

import { Box } from '@mui/material';
import {
  ValidateOrderHeaderComponent,
  VarildateOrderTableComponent
} from './components';

import { Action, Order } from './validate-order.reducer';

interface Props {
  orderState: Order;
  dispatch: React.Dispatch<Action>;
}
export const ValidateOrderComponent: React.FC<Props> = props => {
  const { orderState, dispatch } = props;

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 2, md: 3 }
      }}
    >
      <ValidateOrderHeaderComponent
        state={orderState}
        dispatch={dispatch}
      ></ValidateOrderHeaderComponent>
      <VarildateOrderTableComponent
        state={orderState}
        dispatch={dispatch}
      ></VarildateOrderTableComponent>
    </Box>
  );
};
