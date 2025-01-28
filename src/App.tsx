import { Provider } from 'react-redux';

import { Navigation } from './routes/Navigation';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  )
}
