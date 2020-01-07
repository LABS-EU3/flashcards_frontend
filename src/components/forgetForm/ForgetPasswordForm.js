// Import

// Libraries
import React, { useState, useEffect } from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { SquareLoader } from 'react-spinners';

// Actions
import { forgotPassword } from '../../modules/user/userActions';

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
    user,
  } = props;
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (user.completed) {
      setResponse(
        <H3 color={c.SUCCESS_COLOR}>
          Successfully sent your reset link to your email. Please check your
          inbox!
        </H3>,
      );
    }
    if (user.errors) {
      setResponse(
        <H3 color={c.DANGER_COLOR}> Email address could not be found</H3>,
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
          type="email"
          name="email"
          placeholder="Email"
          value={values.email.toLowerCase()}
          onBlur={handleBlur}
          onChange={handleChange}
          border={errors.email && `2px solid ${c.DANGER_COLOR}`}
        />
      </Label>
      <Button type="submit">
        <H3 WHITE>
          Send Email
          <SquareLoader
            css={{ marginLeft: '20px' }}
            size={15}
            color="#FFA987"
            loading={user.loading}
          />
        </H3>
      </Button>
    </Forms>
  );
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email is not valid')
    .required('Please provide an email'),
});

const ForgetPasswordForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.forgotPassword(values);
    setSubmitting(false);
  },
  validationSchema,
})(Form);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { forgotPassword })(ForgetPasswordForm);
