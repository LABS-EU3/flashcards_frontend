import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { withFormik } from 'formik';
import { connect } from 'react-redux';

import * as yup from 'yup';
import { userSignUp } from '../../modules/user/userActions';

import { H1 } from '../../styles/typography';
import { Button } from '../../styles/buttons';
import {
  ParentBackgroundSecondary,
  SkewDivSecondary,
  UnSkewDivSecondary,
  BottomTriangle,
  TopTriangle,
} from '../../styles/background';
import { Form, Input, Label } from '../../styles/forms';

const SignUpForm = props => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = props;
  return (
    <ParentBackgroundSecondary>
      <TopTriangle />
      <SkewDivSecondary>
        <UnSkewDivSecondary>
          <div>
            {localStorage.getItem('token') && <Redirect to="/dashboard" />}
            <div>
              <H1>Create an Account</H1>
            </div>
            <div>
              <Form onSubmit={handleSubmit}>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Full Name"
                />
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
                <Label>Confirm Password</Label>
                <Input
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  value={values.password2}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <Button type="submit">Sign Up</Button>
                <br />
                Already a user? <NavLink to="/login">Login</NavLink>
              </Form>
            </div>
          </div>
        </UnSkewDivSecondary>
      </SkewDivSecondary>
      <BottomTriangle />
    </ParentBackgroundSecondary>
  );
};

const validationSchema = yup.object().shape({
  fullName: yup.string().required('Please provide a full name'),
  email: yup
    .string()
    .email('Email is not valid')
    .required('Please provide an email'),
  password: yup
    .string()
    .required('Please provide a password')
    .min(8, 'Password too short'),
  password2: yup
    .string()
    .required("Passwords don't match")
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Register = withFormik({
  mapPropsToValues: () => ({
    password: '',
    password2: '',
    email: '',
    fullName: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.userSignUp(
      {
        email: values.email,
        password: values.password,
        fullName: values.fullName,
      },
      props.history,
    );
    setSubmitting(false);
  },
  validationSchema,
})(SignUpForm);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { userSignUp })(Register);
