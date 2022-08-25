import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from './App';
import { Provider } from 'react-redux/es/exports';
import { HeaderProvider } from './context/header-context';
import store from './store';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user-context';

// dev-gm0o6gor.us.auth0.com
// 6nCxtyzB1fadmRzZalKy08iSBOZoasEy

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain='dev-gm0o6gor.us.auth0.com'
  clientId='6nCxtyzB1fadmRzZalKy08iSBOZoasEy'
  redirectUri={window.location.origin}
  cacheLocation = "localstorage"
  >
  <Provider store = {store}>
    <HeaderProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </HeaderProvider>
    </Provider>
  </Auth0Provider>
 );

