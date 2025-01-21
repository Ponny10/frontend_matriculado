import { Provider } from 'react-redux';

import { Navigation } from './routes/Navigation';
import './App.css';
import Store from './store';

export const App = () => {

  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  )
}
