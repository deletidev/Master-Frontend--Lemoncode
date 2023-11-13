import React from 'react';
import { FooterComponent, HeaderComponent } from './components';
import { Box, Container } from '@mui/material';

interface Props {
  children: React.ReactNode;
}
export const AppLayout: React.FC<Props> = props => {
  const { children } = props;
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          paddingTop: { xs: 2, sm: 4, md: 5 },
          paddingBottom: { xs: 3, sm: 6, md: 7 }
        }}
      >
        {children}
      </Container>
      <FooterComponent></FooterComponent>
    </>
  );
};
