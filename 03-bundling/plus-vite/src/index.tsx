import { createRoot } from 'react-dom/client';
import { App } from './app';

import './styles.css';

const rootElement = document.getElementById('root');
console.log(import.meta.env.VITE_API_BASE);

if (rootElement && rootElement instanceof HTMLDivElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  throw new Error('Root element not found');
}
