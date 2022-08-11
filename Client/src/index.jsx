import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import {GlobalStyles} from './Styles/styles.jsx';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <>
  <GlobalStyles/>
  <App/>
  </>
);