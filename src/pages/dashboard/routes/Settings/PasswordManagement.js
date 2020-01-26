// Import

// Libraries
import React, { useState, useEffect } from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { SquareLoader } from 'react-spinners';

// Styles
import { Text, H3 } from '../../../../styles/typography';
import { Button2 } from '../../../../styles/buttons';
import * as c from '../../../../styles/variables/colours';
import { Forms, Input, Label } from '../../../../styles/forms';

// Actions
import { userSignUp } from '../../../../modules/user/userActions';

const PasswordManagementForm = props => {
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
  }, [user.errors, user.completed]);
  return (
    <Forms onSubmit={handleSubmit}>
      {response}

      <Label>
        <H3>Current Password</H3>
        {touched.password && errors.password && (
          <Text color={c.DANGER_COLOR}>{errors.password}</Text>
        )}
        <Input
          type="currentPassword"
          name="currentPassword"
          placeholder="Current Password"
          value={values.currentPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          border={
            touched.currentPassword &&
            errors.currentPassword &&
            `2px solid ${c.DANGER_COLOR}`
          }
        />
      </Label>
      <Label>
        <H3>New Password</H3>
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
      <Button2 type="">
        <H3 color={c.DARK_GRAY}>
          Submit
          <SquareLoader
            css={{ marginLeft: '20px' }}
            size={15}
            color="#FFA987"
            loading={user.loading}
          />
        </H3>
      </Button2>
    </Forms>
  );
};

const validationSchema = yup.object().shape({
  currentPassword: yup.string().required('Please provide a password'),
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
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.userSignUp(
      {
        password: values.password,
      },
      props.history,
    );
    setSubmitting(false);
  },
  validationSchema,
})(PasswordManagementForm);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { userSignUp })(RegisterForm);
