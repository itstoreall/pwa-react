import ReactDOM from 'react-dom/client';
import './styles/_reset.scss';
import './styles/_global.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
