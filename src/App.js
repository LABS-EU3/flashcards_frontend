// import

// Libraries
import React from 'react';
import { Route, Switch } from 'react-router';

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
import EmailConfirmation from './pages/email_confirmation/EmailConfirmation';

// Utils
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div>
      <TopBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/reset/:token" component={ResetPassword} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />

        {/* remove this test line after testing */}
        <Route path="/confirm/:token" component={EmailConfirmation} />
      </Switch>
    </div>
  );
}

export default App;
