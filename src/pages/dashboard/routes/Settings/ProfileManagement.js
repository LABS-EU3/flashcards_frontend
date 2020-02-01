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
import { manageProfile } from '../../../../modules/user/userActions';

const ProfileManagementForm = props => {
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
      setResponse(<H3 color={c.SUCCESS_COLOR}>Profile update successfully</H3>);
    }
    if (user.errors) {
      setResponse(<H3 color={c.DANGER_COLOR}>Error while upadting profile</H3>);
    }
  }, [user.errors, user.completed]);

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
  fullName: yup.string().required('Please provide your full name'),
});

const PMForm = withFormik({
  mapPropsToValues: () => ({
    fullName: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.manageProfile(
      {
        fullName: values.fullName,
      },
      props.history,
    );
    setSubmitting(false);
  },
  validationSchema,
})(ProfileManagementForm);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { manageProfile })(PMForm);
