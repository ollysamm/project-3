import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { ChatProvider } from './context/chatsContext';

const auth0Domain = "dev-nyezxfufbaec4oje.us.auth0.com";
const auth0ClientId = "01gtZYwVfZ5Zr5dxOtm4oGDbIgER9TqU";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider domain={auth0Domain} clientId={auth0ClientId} authorizationParams={{redirect_uri: `${window.location.origin}/chat`}}>
    <ChatProvider>
      <App />
    </ChatProvider>
  </Auth0Provider>
);
