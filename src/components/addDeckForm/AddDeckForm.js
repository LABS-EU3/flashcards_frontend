import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { withFormik } from 'formik';
import * as yup from 'yup';

import {
  createDeck,
  clearTags,
  updateDeck,
} from '../../modules/dashboard/dashboardActions';

import * as types from '../../modules/dashboard/dashboardTypes';
import LightPopButton from '../buttons/LightPopButton';
import { H1, H2, Text, H3 } from '../../styles/typography';
import {
  Forms,
  Input,
  Select,
  FormContainer,
  CardLabel,
} from '../../styles/forms';
import * as c from '../../styles/variables/colours';
import { GrowSpace } from '../../styles/displayFlex';
import { SelectedTagsContainer } from './deckTags/deckTagStyles';
import Tag from './deckTags/DeckTag';

const Form = props => {
  const dispatch = useDispatch();

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    tags,
  } = props;

  // eslint-disable-next-line react/destructuring-assignment
  const { selectedDeck, isEditingDeck } = props.dashboard;

  const preSelectedTags = isEditingDeck ? selectedDeck.tags : [];

  const [selectedTags, setSelectedTags] = useState(preSelectedTags);

  const removeTag = tag => {
    const remainingTags = selectedTags.filter(t => t.id !== tag.id);

    setSelectedTags(remainingTags);
    dispatch({
      type: types.SET_SELECTED_TAGS,
      payload: remainingTags,
    });
  };

  const addTag = tagName => {
    // Only tagName is passed in as we get it form e.target.value
    // so we find the tag using that name.
    const wholeTag = tags.find(t => t.name === tagName);

    const newTagsList = [...selectedTags, wholeTag];
    setSelectedTags(newTagsList);
    dispatch({
      type: types.SET_SELECTED_TAGS,
      payload: newTagsList,
    });
  };

  return (
    <Forms onSubmit={handleSubmit} height="100%">
      <FormContainer width="70%">
        <H1>{isEditingDeck ? 'Update Deck' : 'Create Deck'}</H1>
        <CardLabel>
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
        </CardLabel>
        <CardLabel>
          {/* THIS FUNCTIONALITY IS ALL WRONG I JUST COPIED AND PASTE */}
          <H2>Deck Privacy</H2>
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
            name="public"
            border={touched.tag && errors.tag && `2px solid ${c.DANGER_COLOR}`}
          >
            <option value="false">Private</option>
            <option value="true">Public</option>
          </Select>
        </CardLabel>
        <CardLabel>
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
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </Select>
        </CardLabel>
        <SelectedTagsContainer>
          {selectedTags.map(
            s => s && <Tag key={s.id} value={s} removeTag={removeTag} />,
          )}
        </SelectedTagsContainer>
        <GrowSpace flexGrow="2" />

        <LightPopButton>
          <H3 BOLD WHITE>
            {isEditingDeck ? 'Save' : 'Create'}
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

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

const AddDeckForm = withFormik({
  mapPropsToValues: props => {
    const { isEditingDeck, selectedDeck } = props.dashboard;

    // Initial values of the input elements.
    // If we're currently editing a deck, we get it's name from state
    //  if not, we use an empty string.
    return { deckName: isEditingDeck ? selectedDeck.deck_name : '', tag: '' };
  },
  validationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    const { selectedTags, isEditingDeck, selectedDeck } = props.dashboard;

    // Obtain an array of only ids for all currently selected tags.
    const selectedTagIds = selectedTags.map(t => t && t.id).filter(t => t);

    if (isEditingDeck) {
      /**
       * Obtain an array of previously selected tagIds for
       * the deck we're editing.
       *
       * Null check too, never trust the backend.
       */

      const oldTagIds = selectedDeck.tags.map(oldTag => oldTag && oldTag.id);

      /**
       * addTags is the array of new tags to be added, as required by endpoint.
       * Obtain that by filtering out tagIds that are currently included in
       * state as selected, but are not in our array of oldTagIds
       * (i.e. were not selected before deck editing)
       */
      const addTags = selectedTagIds.filter(t => !oldTagIds.includes(t));

      /**
       * removeTags is the array of tags to be removed. Obtained by filtering
       * out tagIds that were previously selected, but no longer are.
       */
      const removeTags = oldTagIds.filter(t => !selectedTagIds.includes(t));

      /**
       * Create deck object to be sent to server based on from all of
       * the data computed above.
       */
      const deck = {
        name: values.deckName,
        addTags,
        removeTags,
      };

      props.updateDeck(
        {
          deck,
          deckId: selectedDeck.deck_id,
        },
        setSubmitting(false),
      );
    } else {
      /**
       * We're not editing a deck, so we simply get form values and
       * send to the server.
       */

      const deck = {
        name: values.deckName,
        tags: selectedTagIds,
        public: values.public,
      };

      props.createDeck(deck, setSubmitting(false));
    }
  },
  displayName: 'Create Deck',
})(connect(mapStateToProps, {})(Form));

export default connect(mapStateToProps, {
  createDeck,
  clearTags,
  updateDeck,
})(AddDeckForm);
