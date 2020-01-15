import React from 'react';

import { withFormik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import LightPopButton from '../buttons/LightPopButton';
import { H1, Text, H3 } from '../../styles/typography';
import { Forms, TextArea, FormContainer, CardLabel } from '../../styles/forms';
import * as c from '../../styles/variables/colours';
import { GrowSpace } from '../../styles/displayFlex';

import { createCard } from '../../modules/dashboard/dashboardActions';

const Form = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <Forms onSubmit={handleSubmit} height="100%">
      <FormContainer width="70%">
        <H1>Create Card</H1>
        <CardLabel>
          <H3>Front</H3>
          {touched.front && errors.front && (
            <Text color={c.DANGER_COLOR}>{errors.front}</Text>
          )}
          <TextArea
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.front}
            name="front"
            border={
              touched.front && errors.front && `2px solid ${c.DANGER_COLOR}`
            }
          />
        </CardLabel>
        <GrowSpace flexGrow="1" />

        <CardLabel>
          <H3>Back</H3>
          {touched.back && errors.back && (
            <Text color={c.DANGER_COLOR}>{errors.back}</Text>
          )}
          <TextArea
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.back}
            name="back"
            border={
              touched.back && errors.back && `2px solid ${c.DANGER_COLOR}`
            }
          />
        </CardLabel>
        <GrowSpace flexGrow="2" />
        <LightPopButton type="submit">
          <H3 BOLD WHITE>
            Create
          </H3>
        </LightPopButton>
        <GrowSpace flexGrow="1" />
      </FormContainer>
    </Forms>
  );
};

const validationSchema = yup.object().shape({
  front: yup.string().required('Please provide a question for your card'),
  back: yup.string().required('Please provide an answer for your card'),
});

const AddCardForm = withFormik({
  mapPropsToValues: () => ({ front: '', back: '' }),
  validationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    const card = {
      questionText: values.front,
      answerText: values.back,
      deckId: props.deckId,
    };
    props.createCard(card);
    setSubmitting(false);
  },
  displayName: 'Create Card',
})(Form);

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, { createCard })(AddCardForm);
