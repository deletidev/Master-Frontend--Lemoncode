import { Box, Container, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const HeaderComponent: React.FC = () => {
  return (
    <Box
      component="header"
      width="100%"
      sx={{ backgroundColor: 'primary.main', color: 'white' }}
    >
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        <Typography>Validar Pedidos</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
          }}
        >
          <AccountCircleIcon></AccountCircleIcon>
          <Typography>User</Typography>
        </Box>
      </Container>
    </Box>
  );
};
