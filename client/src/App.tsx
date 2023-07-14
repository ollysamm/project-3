import React from 'react';
import './index.css'
import RootLayout from './layouts/RootLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Chat from './pages/chat';
import ChatHistory from './pages/chatHistory';
import ProtectedRoute from './components/protectectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <RootLayout>
                <Chat />
              </RootLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat-history"
          element={
            <ProtectedRoute>
              <RootLayout>
                <ChatHistory />
              </RootLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App
