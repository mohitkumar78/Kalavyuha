
import React from 'react';
import RegistrationForm from './Component/RegistrationFrom';
import OTPVerificationForm from './Component/OTPVerificationForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/otp" element={<OTPVerificationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
