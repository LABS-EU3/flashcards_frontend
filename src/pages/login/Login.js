import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { withFormik } from 'formik';
import { connect } from 'react-redux';

import * as yup from 'yup';
import { userLogin } from '../../modules/user/userActions';

import { H1 } from '../../styles/typography';
import { Button } from '../../styles/buttons';
import {
  ParentBackground,
  SkewDiv,
  UnSkewDiv,
  BottomTriangle,
  TopTriangle,
} from '../../styles/background';
import { Form, Input, Label } from '../../styles/forms';

const LoginForm = props => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = props;
  return (
    <ParentBackground>
      <TopTriangle />
      <SkewDiv>
        <UnSkewDiv>
          <div>
            {localStorage.getItem('token') && <Redirect to="/dashboard" />}
            <div>
              <H1>Login</H1>
            </div>
            <div>
              <Form onSubmit={handleSubmit}>
                <Label>Email</Label>
                <Input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                />
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <Button type="submit">Login</Button>
                <br />
                {`Don't have an account?`}{' '}
                <NavLink to="/signup">Sign Up</NavLink>
              </Form>
            </div>
          </div>
        </UnSkewDiv>
      </SkewDiv>
      <BottomTriangle />
    </ParentBackground>
  );
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email is not valid')
    .required('Please provide an email'),
  password: yup
    .string()
    .required('Please provide a password')
    .min(8, 'Password too short'),
});

const Login = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.userLogin(values.email, values.password, props.history);
    setSubmitting(false);
  },
  validationSchema,
})(LoginForm);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { userLogin })(Login);
