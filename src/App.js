// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage';
import AcceptPolicyPage from './components/AcceptPolicyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/accept-policy" element={<AcceptPolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
