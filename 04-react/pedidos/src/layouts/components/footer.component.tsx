import { Box, Container, Typography } from '@mui/material';

export const FooterComponent: React.FC = () => {
  return (
    <Box
      component="footer"
      width="100%"
      sx={{ backgroundColor: 'black', color: 'white' }}
    >
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: 1,
          paddingBottom: 1
        }}
      >
        <Typography variant="caption">
          Copyright © 2010-2023 Company S.L. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};
