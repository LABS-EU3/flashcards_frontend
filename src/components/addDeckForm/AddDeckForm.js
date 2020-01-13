import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { withFormik } from 'formik';
import * as yup from 'yup';

import {
  createDeck,
  clearTags,
} from '../../modules/dashboard/dashboardActions';

import types from '../../modules/dashboard/dashboardTypes';
import LightPopButton from '../buttons/LightPopButton';
import { H1, H2, Text, H3 } from '../../styles/typography';
import { Forms, Input, Label, Select, FormContainer } from '../../styles/forms';
import * as c from '../../styles/variables/colours';
import { GrowSpace } from '../../styles/displayFlex';
import { SelectedTagsContainer } from './deckTags/deckTagStyles';
import Tag from './deckTags/DeckTag';

const Form = props => {
  const dispatch = useDispatch();
  const [selectedTags, setSelectedTags] = useState([]);

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    tags,
  } = props;

  const removeTag = tag => {
    const remainingTags = selectedTags.filter(t => t !== tag);
    setSelectedTags(remainingTags);
    dispatch({ type: types.SET_SELECTED_TAGS, payload: remainingTags });
  };

  const addTag = tag => {
    const newTagsList = [...selectedTags, tag];
    setSelectedTags(newTagsList);
    dispatch({ type: types.SET_SELECTED_TAGS, payload: newTagsList });
  };

  return (
    <Forms onSubmit={handleSubmit} height="100%">
      <FormContainer>
        <H1>Create Deck</H1>
        <Label>
          <H2>Deck Name</H2>
          {touched.deckName && errors.deckName && (
            <Text color={c.DANGER_COLOR}>{errors.deckName}</Text>
          )}
          <Input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.deckName}
            name="deckName"
            border={
              touched.deckName &&
              errors.deckName &&
              `2px solid ${c.DANGER_COLOR}`
            }
          />
        </Label>

        <Label>
          <H2>Tags</H2>
          {touched.tag && errors.tag && (
            <Text color={c.DANGER_COLOR}>{errors.deckName}</Text>
          )}
          <Select
            placeholder="Add tags to your deck"
            type="text"
            onChange={e => {
              handleChange(e);
              addTag(e.target.value);
            }}
            onBlur={handleBlur}
            value={values.tag}
            name="tag"
            border={touched.tag && errors.tag && `2px solid ${c.DANGER_COLOR}`}
          >
            {tags.map(t => (
              <option value={t}>{t}</option>
            ))}
          </Select>
        </Label>
        <SelectedTagsContainer>
          {selectedTags.map(s => (
            <Tag value={s} removeTag={removeTag} />
          ))}
        </SelectedTagsContainer>
        <GrowSpace flexGrow="2" />

        <LightPopButton>
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
  deckName: yup.string().required('Please provide a name for your deck'),
  tag: yup.string(),
});

const AddDeckForm = withFormik({
  mapPropsToValues: () => ({ deckName: '', tag: '' }),
  validationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    const deck = {
      name: values.deckName,
      tagsArray: props.dashboard.selectedTags,
    };

    props.createDeck(deck, setSubmitting(false));
  },
  displayName: 'Create Deck',
})(Form);

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, { createDeck, clearTags })(AddDeckForm);