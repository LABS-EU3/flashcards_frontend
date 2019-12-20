import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import * as yup from 'yup';
import { userLogin } from '../../modules/user/userActions';

import { H1, Text, H3, H5 } from '../../styles/typography';
import { Button, BackArrowButton } from '../../styles/buttons';
import {
  ParentBackground,
  SkewDiv,
  UnSkewDiv,
  BottomTriangle,
  TopTriangle,
  FlexRowBackground,
  DesktopImage,
} from '../../styles/background';
import { Form, Input, Label } from '../../styles/forms';

import img from '../../assets/images/undraw_online_test_gba7 (1).svg';
import BackArrow from '../../assets/icons/Arrow 1.svg';

const LoginForm = props => {
  const ForgotText = styled(H3)`
    align-self: flex-end;
    line-height: 0;
    margin-bottom: 1em;
  `;

  const history = useHistory();
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = props;
  return (
    <FlexRowBackground>
      {localStorage.getItem('token') && <Redirect to="/dashboard" />}
      <DesktopImage>
        <img alt="online test" src={img} />
      </DesktopImage>
      <ParentBackground>
        <BackArrowButton
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={`${BackArrow}`} alt="back arrow" />
          <H5>Back</H5>
        </BackArrowButton>
        <TopTriangle />
        <SkewDiv>
          <UnSkewDiv>
            <H1>Login</H1>
            <Form onSubmit={handleSubmit}>
              <Label>
                <H3>Email</H3>
                {touched.email && errors.email && (
                  <Text color="red">{errors.email}</Text>
                )}
                <Input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                  border={touched.email && errors.email && '2px solid red'}
                />
              </Label>
              <Label>
                <H3>Password</H3>
                {touched.password && errors.password && (
                  <Text color="red">{errors.password}</Text>
                )}
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  border={errors.password && '1px solid red'}
                />
              </Label>
              <ForgotText REGULAR>
                <NavLink to="/forgot">Forgot Password?</NavLink>
              </ForgotText>
              <Button type="submit">
                <H3 WHITE>Login</H3>
              </Button>
              <br />
              <H3 REGULAR>
                Do not have an account? <NavLink to="/signup">Sign Up</NavLink>
              </H3>
            </Form>
          </UnSkewDiv>
        </SkewDiv>
        <BottomTriangle />
      </ParentBackground>
    </FlexRowBackground>
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
