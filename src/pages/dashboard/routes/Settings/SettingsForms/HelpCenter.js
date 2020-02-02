// Import

// Libraries
import React, { useState, useEffect } from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { SquareLoader } from 'react-spinners';

// Styles
import { Text, H3 } from '../../../../../styles/typography';
import { Button2 } from '../../../../../styles/buttons';
import * as c from '../../../../../styles/variables/colours';
import { Forms, Label, TextArea } from '../../../../../styles/forms';

// Actions
import { submitHelpCenterMsg } from '../../../../../modules/user/userActions';

const HelpCenterForm = props => {
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
      setResponse(<H3 color={c.SUCCESS_COLOR}>Message sent successfully</H3>);
    }
    if (user.errors) {
      setResponse(<H3 color={c.DANGER_COLOR}>Error Sending message</H3>);
    }
  }, [user.errors, user.completed]);

  return (
    <Forms onSubmit={handleSubmit}>
      {response}

      <Label>
        {touched.feedback && errors.feedback && (
          <Text color={c.DANGER_COLOR}>{errors.feedback}</Text>
        )}
        <TextArea
          name="feedback"
          placeholder="Let us know how we can help or improve"
          value={values.feedback}
          rows="10"
          cols="40"
          autoFocus
          onBlur={handleBlur}
          onChange={handleChange}
          border={
            touched.feedback && errors.feedback && `2px solid ${c.DANGER_COLOR}`
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
  feedback: yup.string().required('Text area cannot be empty please'),
});

const HCForm = withFormik({
  mapPropsToValues: () => ({
    feedback: '',
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    setSubmitting(true);
    props.submitHelpCenterMsg(values);
    setSubmitting(false);
    resetForm()
  },
  validationSchema,
})(HelpCenterForm);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { submitHelpCenterMsg })(HCForm);
