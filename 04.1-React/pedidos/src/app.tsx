import { ThemeProvider } from '@mui/material';
import { ValidateOrderScene } from './scenes/validate-order.scene';
import { myTheme } from './core/theme';
import { OrderProvider } from './core/providers';

export const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <OrderProvider>
        <ValidateOrderScene></ValidateOrderScene>
      </OrderProvider>
    </ThemeProvider>
  );
};
