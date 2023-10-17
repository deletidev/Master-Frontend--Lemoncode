import React from 'react';
import { Box, TextField } from '@mui/material';

import { useOrderContext } from '@/core/providers';

export const ValidateOrderHeaderMemo = React.memo(() => {
  const { order } = useOrderContext();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: { xs: 2, md: 3 }
      }}
    >
      <TextField
        id="outlined-basic"
        label="Número"
        variant="outlined"
        value={order.header.id}
        size="small"
        inputProps={{
          readOnly: true,
          size: '8'
        }}
        sx={{ width: 'fit-content', pointerEvents: 'none' }}
      />
      <TextField
        id="outlined-basic"
        label="Proveedor"
        variant="outlined"
        value={order.header.supplier}
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
        label="Fecha"
        variant="outlined"
        value={order.header.date.toISOString().split('T')[0]}
        size="small"
        type="date"
        inputProps={{
          readOnly: true
        }}
        sx={{ width: 'fit-content', pointerEvents: 'none' }}
      />
    </Box>
  );
});
