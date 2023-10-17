import React from 'react';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  Paper,
  Slide,
  TextField,
  Typography
} from '@mui/material';

import { Action, Order } from '../../validate-order.reducer';
import { TransitionProps } from '@mui/material/transitions';
import { HeaderOrder } from '../../validate-order.vm';
import { ValidateOrderHeaderMemo } from './validate-order-header-memo.component';

interface Props {
  state: Order;
  dispatch: React.Dispatch<Action>;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ValidateOrderHeaderComponent: React.FC<Props> = props => {
  const { state } = props;
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    location.reload();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Pedido a proveedor
      </Typography>
      <Paper
        sx={{
          padding: { xs: 2, md: 3 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, md: 3 },
          marginBottom: 1.5
        }}
        component="form"
        id="form-order"
        onSubmit={handleSubmit}
      >
        <ValidateOrderHeaderMemo></ValidateOrderHeaderMemo>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 2, md: 3 }
          }}
        >
          <TextField
            id="outlined-basic"
            label="Importe Total"
            variant="outlined"
            value={state.totalPrice}
            size="small"
            inputProps={{
              readOnly: true
            }}
            sx={{
              width: { xs: '50%', sm: 'fit-content' },
              pointerEvents: 'none'
            }}
          />
          <TextField
            id="outlined-basic"
            label="Estado"
            variant="outlined"
            value={`${state.totalPercentage} %`}
            size="small"
            inputProps={{
              readOnly: true,
              maxLength: '5',
              size: '5'
            }}
            sx={{ width: 'fit-content', pointerEvents: 'none' }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={state.totalPercentage === 100 ? false : true}
            sx={{
              justifySelf: 'flex-end',
              marginRight: 0,
              marginLeft: 'auto',
              width: { xs: '100%', sm: 'fit-content' }
            }}
          >
            Enviar
          </Button>
        </Box>
      </Paper>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Pedido enviado correctamente'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Pododrás encontrar la información del pedido en la bandeja de
            pedidos enviados
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: 2.5, paddingTop: 1 }}>
          <Button onClick={handleClose} color="secondary">
            Ir a envidados
          </Button>
          <Button onClick={handleClose} variant="contained">
            Siguiente pedido pendiente
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
