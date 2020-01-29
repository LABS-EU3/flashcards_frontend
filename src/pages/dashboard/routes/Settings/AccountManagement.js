// Import

// Libraries
import React, { useState } from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import Modal from 'react-awesome-modal';
// import { SquareLoader } from 'react-spinners';

// Styles
import { Text, H1, H2, H3 } from '../../../../styles/typography';
import { LineButton } from '../../../../styles/buttons';
import styled from 'styled-components';
import * as c from '../../../../styles/variables/colours';
import { Forms, Input, Label } from '../../../../styles/forms';
import { InnerContainer } from './Settings';

// Actions
import { manageAccount } from '../../../../modules/user/userActions';

export const ModalWrapper = styled.div``;
export const ModalButton = styled.button`
  text-align: center;
  border-radius: 3px;
  border: 1px solid #f6f1f0;
  outline: none;
  width: 60%;
  margin: 1em 0em 1em 0em;
  box-shadow: 0px 4px 4px rgba(210, 31, 60, 0.03);
  background: #ffffff;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(1.01);
    background: ${c.PRIMARY_POP_COLOR};
  }
  &:not([disabled]) {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: 95%;
    margin: 1em 0;
    padding-bottom: 0;
  }
`;

const AccoutManagementForm = props => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = props;

  const [state, setState] = useState({ visible: false });

  function openModal() {
    setState({ visible: true });
  }

  function closeModal() {
    setState({ visible: false });
  }
  // const [response, setResponse] = useState(null);

  // useEffect(() => {
  //   if () {
  //     setResponse(
  //       <H3 color={c.SUCCESS_COLOR}>
  //         Account update successfully
  //       </H3>,
  //     );
  //   }
  //   if (user.errors) {
  //     setResponse(
  //   <H3 color={c.DANGER_COLOR}>
  //      Error while upadting account
  //   </H3 >
  // );
  //   }
  // }, []);

  return (
    <Forms onSubmit={handleSubmit}>
      {/* {response} */}

      <Label>
        <H3>Current Password</H3>
        {touched.password && errors.password && (
          <Text color={c.DANGER_COLOR}>{errors.password}</Text>
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
      <LineButton type="" onClick={openModal}>
        <H3 color={c.DANGER_COLOR}>
          Delete
          {/* <SquareLoader
            css={{ marginLeft: '20px' }}
            size={15}
            color="#FFA987"
            loading={user.loading}
          /> */}
        </H3>
      </LineButton>
      <Modal
        visible={state.visible}
        width="80%"
        height="300"
        borde-radius="50%"
        effect="fadeInUp"
        onClickAway={closeModal}
        className="modalClass"
      >
        <ModalWrapper>
          <H1 color="red">Delete Account</H1>
          <H2>Are you sure you want to delete?</H2>
          <InnerContainer>
            <ModalButton onClick={closeModal}>
              <H2>Close</H2>
            </ModalButton>
            <ModalButton onClick={handleSubmit} onClick={closeModal}>
              <H2 color="red">Delete</H2>
            </ModalButton>
          </InnerContainer>
        </ModalWrapper>
      </Modal>
    </Forms>
  );
};

const validationSchema = yup.object().shape({
  currentPassword: yup.string().required('Please provide your password'),

  password2: yup
    .string()
    .required("Passwords don't match")
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const AMForm = withFormik({
  mapPropsToValues: () => ({
    password: '',
    password2: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.manageAccount(
      {
        password: values.password,
      },
      props.history,
    );
    setSubmitting(false);
  },
  validationSchema,
})(AccoutManagementForm);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { manageAccount })(AMForm);
