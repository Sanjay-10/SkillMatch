import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import store, { persistor } from "./store"; // Correct default and named import
import './index.css';
import App from './App.jsx';
import ErrorBoundaryWithNavigation from './pages/Error.jsx'; // Ensure this uses navigation properly
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundaryWithNavigation>
          <App />
        </ErrorBoundaryWithNavigation>
      </PersistGate>  
    </Provider>
  </HashRouter>
);
