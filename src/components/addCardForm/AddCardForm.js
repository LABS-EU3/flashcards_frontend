import React, { useState, useEffect } from 'react';

import { Formik, useField } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import LightPopButton from '../buttons/LightPopButton';
import { H1, Text, H3 } from '../../styles/typography';
import { Forms, TextArea, FormContainer, CardLabel } from '../../styles/forms';
import * as c from '../../styles/variables/colours';
import { GrowSpace } from '../../styles/displayFlex';
import { openUploadWidget } from '../../utils/CloudinaryService';

import {
  createCard,
  updateCard,
} from '../../modules/dashboard/dashboardActions';

const InputField = ({ title, btnName, setCallback, ...props }) => {
  const [field, meta] = useField(props);

  const handleChange = event => {
    setCallback({ ...props.card, [props.name]: event.target.value });
  };

  return (
    <CardLabel>
      <H3>{title}</H3>
      <TextArea
        {...field}
        {...props}
        // eslint-disable-next-line react/destructuring-assignment
        value={props.card[`${props.name}`]}
        onChange={handleChange}
      />

      {meta.touched && meta.error ? (
        <Text color={c.DANGER_COLOR}>{meta.error}</Text>
      ) : null}

      <button
        type="button"
        onClick={() =>
          openUploadWidget(
            ['an', 'array'],
            'flashcard_front_13',
            error => {
              console.log(error);
            },
            // eslint-disable-next-line camelcase
            image_url =>
              setCallback(prev => ({ ...prev, [btnName]: image_url })),
          )
        }
      >
        Upload Image
      </button>
    </CardLabel>
  );
};

const Form = props => {
  const { dashboard } = props;
  const { isUpdatingCard, selectedCard } = dashboard;
  const [card, setCard] = useState({
    question: '',
    answer: '',
    imageQuestion: '',
    imageAnswer: '',
  });

  useEffect(() => {
    if (isUpdatingCard) {
      setCard({
        question: selectedCard.question,
        answer: selectedCard.answer,
        imageQuestion: selectedCard.image_url_question,
        imageAnswer: selectedCard.image_url_answer,
      });
    }
  }, [isUpdatingCard, selectedCard]);

  return (
    <Formik
      // eslint-disable-next-line react/jsx-boolean-value
      enableReinitialize={true}
      initialValues={{
        question: card.question,
        answer: card.answer,
        imageQuestion: card.imageQuestion,
        imageAnswer: card.imageAnswer,
      }}
      validationSchema={yup.object().shape({
        question: yup
          .string()
          .required('Please provide a question for your card'),
        answer: yup.string().required('Please provide an answer for your card'),
        imageQuestion: yup.string(),
        imageAnswer: yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const currentCard = {
          questionText: values.question,
          answerText: values.answer,
          deckId: props.deckId,
          imageUrlQuestion: values.imageQuestion,
          imageUrlAnswer: values.imageAnswer,
        };
        const cardId = selectedCard.id;

        setSubmitting(true);
        if (isUpdatingCard) {
          props.updateCard(currentCard, cardId);
        } else {
          props.createCard(currentCard);
        }
        setSubmitting(false);
      }}
    >
      <Forms height="100%">
        <FormContainer width="70%">
          {isUpdatingCard ? <H1>Update Card</H1> : <H1>Create Card</H1>}
          <InputField
            title="Card Question"
            btnName="imageQuestion"
            name="question"
            card={card}
            setCallback={setCard}
          />
          <GrowSpace flexGrow="1" />
          <InputField
            title="Card Answer"
            btnName="imageAnswer"
            name="answer"
            card={card}
            setCallback={setCard}
          />
          <GrowSpace flexGrow="2" />
          <LightPopButton type="submit">
            {isUpdatingCard ? (
              <H3 BOLD WHITE>
                Save
              </H3>
            ) : (
              <H3 BOLD WHITE>
                Create
              </H3>
            )}
          </LightPopButton>
          <GrowSpace flexGrow="1" />
        </FormContainer>
      </Forms>
    </Formik>
  );
};

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, { createCard, updateCard })(Form);
