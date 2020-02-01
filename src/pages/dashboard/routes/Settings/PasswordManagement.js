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
import { managePassword } from '../../../../modules/user/userActions';

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
        <H3 color={c.SUCCESS_COLOR}>Password update successfully</H3>,
      );
    }
    if (user.errors) {
      setResponse(<H3 color={c.DANGER_COLOR}>Error while upadting account</H3>);
    }
  }, [user.errors, user.completed]);

  return (
    <Forms onSubmit={handleSubmit}>
      {response}
      <Label>
        <H3>Current Password</H3>
        {touched.currentPassword && errors.currentPassword && (
          <Text color={c.DANGER_COLOR}>{errors.currentPassword}</Text>
        )}
        <Input
          type="password"
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
        {touched.newPassword && errors.newPassword && (
          <Text color={c.DANGER_COLOR}>{errors.newPassword}</Text>
        )}
        <Input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={values.newPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          border={
            touched.newPassword &&
            errors.newPassword &&
            `2px solid ${c.DANGER_COLOR}`
          }
        />
      </Label>

      <Label>
        <H3>Confirm Password</H3>
        {touched.confirmNewPAssword && errors.confirmNewPAssword && (
          <Text color={c.DANGER_COLOR}>{errors.confirmNewPAssword}</Text>
        )}
        <Input
          type="password"
          name="confirmNewPAssword"
          placeholder="Confirm New Password"
          value={values.confirmNewPAssword}
          onBlur={handleBlur}
          onChange={handleChange}
          border={
            touched.confirmNewPAssword &&
            errors.confirmNewPAssword &&
            `2px solid ${c.DANGER_COLOR}`
          }
        />
      </Label>

      <Button2 type="submit">
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
  currentPassword: yup
    .string()
    .required('Please provide your current password'),
  newPassword: yup
    .string()
    .required('Please provide a new password')
    .min(8, 'Password too short'),
  confirmNewPAssword: yup
    .string()
    .required("Passwords don't match")
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
});

const PWDMForm = withFormik({
  mapPropsToValues: () => ({
    newPassword: '',
    confirmNewPAssword: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.managePassword(values);
    setSubmitting(false);
  },
  validationSchema,
})(PasswordManagementForm);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { managePassword })(PWDMForm);
