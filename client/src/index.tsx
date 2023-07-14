import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const auth0Domain = "dev-nyezxfufbaec4oje.us.auth0.com";
const auth0ClientId = "JXm1Q2rBml1FbegqxdZiTQIoVp6ZcaPQ";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider domain={auth0Domain} clientId={auth0ClientId} authorizationParams={{redirect_uri: `${window.location.origin}/chat`}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
