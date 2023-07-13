import React from 'react';
import './index.css'
import RootLayout from './layouts/RootLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Chat from './pages/chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={
          <RootLayout>
            <Chat />
          </RootLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App
