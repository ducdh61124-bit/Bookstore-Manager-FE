import React, { useState } from 'react';
import './App.css';
import Login from './pages/auth/loginInterface/Login';
import Register from './pages/auth/registerInterface/Register';
import ForgotPassword from './pages/auth/forgotpasswordInterface/ForgotPassword';

function App() {
  const [view, setView] = useState('login');

  return (
    <div className="auth-container">
      {/* Thêm key={view} để React hiểu là phải chạy lại animation mỗi khi view đổi */}
      <div key={view} className="auth-card-wrapper">
        {view === 'login' && <Login onSwitch={() => setView('register')} onForgot={() => setView('forgot')} />}
        {view === 'register' && <Register onSwitch={() => setView('login')} />}
        {view === 'forgot' && <ForgotPassword onBack={() => setView('login')} />}
      </div>
    </div>
  );
}

export default App;