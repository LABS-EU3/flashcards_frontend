// Import

// Libraries
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Styles
import * as yup from 'yup';
import * as c from '../../styles/variables/colours';
import { Text, H3 } from '../../styles/typography';
import { Button } from '../../styles/buttons';
import { Forms, Input, Label } from '../../styles/forms';

// Actions
import { userLogin } from '../../modules/user/userActions';

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
  } = props;
  return (
    <Forms onSubmit={handleSubmit}>
      <Label>
        <H3>Email</H3>
        {touched.email && errors.email && (
          <Text color={c.DANGER_COLOR}>{errors.email}</Text>
        )}
        <Input
          name="email"
          value={values.email}
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
        <H3 WHITE>Login</H3>
      </Button>
    </Forms>
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
