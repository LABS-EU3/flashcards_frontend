// Import

// Libraries
import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';

// Actions
import { resetPassword } from '../../modules/user/userActions';

// Styles
import { Text, H3 } from '../../styles/typography';
import { Button } from '../../styles/buttons';
import * as c from '../../styles/variables/colours';
import { Forms, Input, Label } from '../../styles/forms';

const Form = props => {
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
      <Label>
        <H3>Re-Enter Password</H3>
        {touched.confirmPassword && errors.confirmPassword && (
          <Text color={c.DANGER_COLOR}>{errors.confirmPassword}</Text>
        )}
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Re-Enter Password"
          value={values.confirmPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          border={errors.confirmPassword && `2px solid ${c.DANGER_COLOR}`}
        />
      </Label>
      <Button type="submit">
        <H3 WHITE>Confirm</H3>
      </Button>
    </Forms>
  );
};

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Please provide a password')
    .min(8, 'Password too short'),
  confirmPassword: yup
    .string()
    .required("Passwords don't match")
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const ResetPasswordForm = withFormik({
  mapPropsToValues: () => ({
    confirmPassword: '',
    password: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.resetPassword(values.confirmPassword, values.password, props.history);
    setSubmitting(false);
  },
  validationSchema,
})(Form);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { resetPassword })(ResetPasswordForm);