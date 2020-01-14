// import

// Libraries
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { ModalProvider } from 'styled-react-modal';

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
import { FadingBackground as Overlay } from './components/modals/modalStyles';
import { fetchProfile } from './modules/user/userActions';

// Utils
import PrivateRoute from './utils/PrivateRoute';
import { getToken } from './utils/auth';

function App(props) {
  useEffect(() => {
    const token = getToken();
    if (token) {
      props.fetchProfile();
    }
  }, []);

  return (
    <ModalProvider backgroundComponent={Overlay}>
      <div>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/reset/:token" component={ResetPassword} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/confirm/:token" component={EmailConfirmation} />
        </Switch>
      </div>
    </ModalProvider>
  );
}

export default connect(null, { fetchProfile })(App);
