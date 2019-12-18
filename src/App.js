// import

// Libraries
import React from 'react';
import { Route } from 'react-router';

// Styles
import './App.css';

// Components
import TopBar from './components/headerBar/TopBar';

// Pages
import Landing from './pages/landing/Landing';
import Dashboard from './pages/dashboard/Dashboard';
import ForgotPassword from './pages/forgot_password/ForgotPassword';
import ResetPassword from './pages/reset_password/ResetPassword';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
      Test
      <TopBar />
      <Route exact path="/" component={Dashboard} />
      <Route path="/landing" component={Landing} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/reset" component={ResetPassword} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
