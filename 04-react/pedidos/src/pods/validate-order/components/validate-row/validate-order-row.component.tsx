import React from 'react';
import { Checkbox, InputAdornment, TextField } from '@mui/material';

import { StyledTableCell, StyledTableRow } from '@/core/theme/styledcomponents';

import { Item } from '../../validate-order.vm';
import { Action, Order } from '../../validate-order.reducer';

interface Props {
  item: Item;
  state: Order;
  dispatch: React.Dispatch<Action>;
}

export const ValidateOrederRowComponent: React.FC<Props> = props => {
  const { item, state, dispatch } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'setItemsAmount',
      id: item.id,
      amount: Number(e.target.value),
      payload: state.items
    });
  };

  return (
    <StyledTableRow>
      <StyledTableCell>
        <Checkbox
          inputProps={{ 'aria-label': 'Checkbox validar' }}
          checked={item.checked ? true : false}
          onClick={e => {
            dispatch({
              type: 'setItemsChequed',
              id: item.id,
              payload: state.items
            });
          }}
        />
      </StyledTableCell>
      <StyledTableCell
        sx={{
          color: item.state === 'Válido' ? 'success.main' : 'warning.main',
          fontWeight: 600
        }}
      >
        {item.state}
      </StyledTableCell>
      <StyledTableCell>{item.description}</StyledTableCell>
      <StyledTableCell align="right">
        <TextField
          id="outlined-basic"
          type="number"
          label=""
          aria-label="cambiar importe"
          variant="outlined"
          value={item.amount}
          size="small"
          sx={{
            width: 'fit-content',
            textAlign: 'right',
            pointerEvents: item.state === 'Válido' ? 'none' : 'all'
          }}
          InputProps={
            item.state === 'Válido'
              ? {
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">€</InputAdornment>
                  )
                }
              : {
                  readOnly: false,
                  endAdornment: (
                    <InputAdornment position="end">€</InputAdornment>
                  )
                }
          }
          inputProps={{ sx: { textAlign: 'right' } }}
          onChange={handleChange}
        />
      </StyledTableCell>
    </StyledTableRow>
  );
};
