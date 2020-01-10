// Import

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// Styles
import './index.css';
import App from './App';

// Redux Store
import storeObject from './store';

ReactDOM.render(
  <Provider store={storeObject.store}>
    <PersistGate loading={null} persistor={storeObject.persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
