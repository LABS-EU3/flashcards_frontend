// Import

// Libraries
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { SquareLoader } from 'react-spinners';

// Styles
import * as yup from 'yup';
import * as c from '../../styles/variables/colours';
import { Text, H3 } from '../../styles/typography';
import { Button, GoogleButton } from '../../styles/buttons';
import { Forms, Input, Label } from '../../styles/forms';

// Actions
import { userLogin } from '../../modules/user/userActions';
import { baseUrl } from '../../config';

import GoogleIcon from '../../assets/icons/GooglePlus-logos-01.png';

const Form = props => {
  const ForgotText = styled(H3)`
    align-self: flex-end;
    line-height: 0;
    margin-bottom: 1em;
  `;
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    user,
  } = props;
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (user.completed) {
      setResponse(
        <H3 color={c.SUCCESS_COLOR}>
          Successfully logged in, please wait to be redirected
        </H3>,
      );
    }
    if (user.errors) {
      setResponse(
        <H3 color={c.DANGER_COLOR}>
          Email and password combination was not recognized
        </H3>,
      );
    }
  }, [user.errors, user.completed]);
  return (
    <Forms onSubmit={handleSubmit}>
      {response}
      <Label>
        <H3>Email</H3>
        {touched.email && errors.email && (
          <Text color={c.DANGER_COLOR}>{errors.email}</Text>
        )}
        <Input
          name="email"
          value={values.email.toLowerCase()}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
          border={
            touched.email && errors.email && `2px solid ${c.DANGER_COLOR}`
          }
        />
      </Label>
      <Label>
        <H3>Password</H3>
        {touched.password && errors.password && (
          <Text color={c.DANGER_COLOR}>{errors.password}</Text>
        )}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          border={errors.password && `2px solid ${c.DANGER_COLOR}`}
        />
      </Label>
      <ForgotText REGULAR>
        <NavLink to="/forgot">Forgot Password?</NavLink>
      </ForgotText>
      <Button type="submit">
        <H3 WHITE>
          Login
          <SquareLoader
            css={{ marginLeft: '20px' }}
            size={15}
            color="#FFA987"
            loading={user.loading}
          />
        </H3>
      </Button>
      <a href={`${baseUrl}/auth/google`}>
        <GoogleButton type="button">
          <img src={GoogleIcon} alt="google-icon" />
          <H3 BRAND>Login With Google</H3>
        </GoogleButton>
      </a>
    </Forms>
  );
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email is not valid')
    .required('Please provide an email'),
  password: yup.string().required('Please provide a password'),
});

const LoginForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.userLogin(values, props.history);
    setSubmitting(false);
  },
  validationSchema,
})(Form);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { userLogin })(LoginForm);
