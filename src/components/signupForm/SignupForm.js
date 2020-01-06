// Import

// Libraries
import React, { useState, useEffect } from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';

// Styles
import { Text, H3 } from '../../styles/typography';
import { Button } from '../../styles/buttons';
import * as c from '../../styles/variables/colours';
import { Forms, Input, Label } from '../../styles/forms';

// Actions
import { userSignUp } from '../../modules/user/userActions';

const SignUpForm = props => {
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
          Successfully created an account, please wait to be redirected
        </H3>,
      );
    }
    if (user.errors) {
      setResponse(<H3 color={c.DANGER_COLOR}>User already exists</H3>);
    }
  }, [user.errors]);
  return (
    <Forms onSubmit={handleSubmit}>
      {response}
      <Label>
        <H3>Name</H3>
        {touched.fullName && errors.fullName && (
          <Text color={c.DANGER_COLOR}>{errors.fullName}</Text>
        )}
        <Input
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Full Name"
          border={
            touched.fullName && errors.fullName && `2px solid ${c.DANGER_COLOR}`
          }
        />
      </Label>
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
          border={
            touched.password && errors.password && `2px solid ${c.DANGER_COLOR}`
          }
        />
      </Label>
      <Label>
        <H3>Confirm Password</H3>
        {touched.password2 && errors.password2 && (
          <Text color={c.DANGER_COLOR}>{errors.password2}</Text>
        )}
        <Input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={values.password2}
          onBlur={handleBlur}
          onChange={handleChange}
          border={
            touched.password2 &&
            errors.password2 &&
            `2px solid ${c.DANGER_COLOR}`
          }
        />
      </Label>
      <Button type="submit">
        <H3 WHITE>Sign Up</H3>
      </Button>
    </Forms>
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

const RegisterForm = withFormik({
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
export default connect(mapStateToProps, { userSignUp })(RegisterForm);
