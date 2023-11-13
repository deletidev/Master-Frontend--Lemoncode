import React from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow
} from '@mui/material';

import {
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow
} from '@/core/theme';

import { ValidateOrederRowComponent } from '../validate-row/validate-order-row.component';
import { Action, Order } from '../../validate-order.reducer';
import { State } from '../../validate-order.vm';

interface Props {
  state: Order;
  dispatch: React.Dispatch<Action>;
}

export const VarildateOrderTableComponent: React.FC<Props> = props => {
  const { state, dispatch } = props;

  const handleClick = (value: State) => () => {
    dispatch({
      type: 'setItemsState',
      state: value,
      payload: state.items
    });
    dispatch({ type: 'resetItemsChequed', payload: state.items });
    dispatch({ type: 'setTotalPrice', payload: state.items });
    dispatch({ type: 'setTotalPercentage', payload: state.items });
  };

  return (
    <Paper
      sx={{
        padding: { xs: 2, md: 3 },
        flexGrow: 1,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 2, md: 3 }
      }}
    >
      <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 } }}>
        <Button
          variant="outlined"
          onClick={handleClick('Válido')}
          color="success"
        >
          Validar
        </Button>
        <Button
          variant="outlined"
          color="warning"
          onClick={handleClick('Pendiente')}
        >
          Invalidar
        </Button>
      </Box>
      <StyledTableContainer sx={{ flexGrow: 1 }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          size="small"
          sx={{
            minWidth: 320,
            borderCollapse: 'collapse'
          }}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell
                sx={{
                  borderTopLeftRadius: '3px',
                  width: '80px'
                }}
              ></StyledTableCell>
              <StyledTableCell>Estado</StyledTableCell>
              <StyledTableCell>Descripción</StyledTableCell>
              <StyledTableCell
                align="right"
                sx={{
                  borderTopRightRadius: '3px'
                }}
              >
                Importe
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.items.length > 0 ? (
              state.items.map(item => (
                <ValidateOrederRowComponent
                  key={item.id}
                  item={item}
                  state={state}
                  dispatch={dispatch}
                />
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell>
                  <p>{`No hay artículos pendientes de validar, agrega artículos o descarta el pedido`}</p>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  );
};
