import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import * as yup from 'yup';
import { userSignUp } from '../../modules/user/userActions';

import { H1, Text, H3, H5 } from '../../styles/typography';
import { Button, BackArrowButton } from '../../styles/buttons';
import {
  ParentBackgroundSecondary,
  SkewDivSecondary,
  UnSkewDivSecondary,
  FlexRowBackground,
  DesktopImage,
} from '../../styles/background';
import * as c from '../../styles/variables/colours';
import { Forms, Input, Label } from '../../styles/forms';
import img from '../../assets/images/undraw_analysis_4jis.svg';
import BackArrow from '../../assets/icons/Arrow 1.svg';

const BackArrowButton2 = styled(BackArrowButton)`
  margin-top: -25em;
`;

const SignUpForm = props => {
  const history = useHistory();
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = props;
  return (
    <FlexRowBackground>
      {localStorage.getItem('token') && <Redirect to="/dashboard" />}
      <DesktopImage>
        <img src={img} alt="analysis" />
      </DesktopImage>
      <ParentBackgroundSecondary>
        <BackArrowButton2
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={`${BackArrow}`} alt="back arrow" />
          <H5>Back</H5>
        </BackArrowButton2>
        <SkewDivSecondary>
          <UnSkewDivSecondary>
            <H1>Create an Account</H1>
            <Forms onSubmit={handleSubmit}>
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
                    touched.fullName &&
                    errors.fullName &&
                    `2px solid ${c.DANGER_COLOR}`
                  }
                />
              </Label>
              <Label>
                <H3>Email</H3>
                {touched.email && errors.email && (
                  <Text color={c.DANGER_COLOR}>{errors.email}</Text>
                )}
                <Input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                  border={
                    touched.email &&
                    errors.email &&
                    `2px solid ${c.DANGER_COLOR}`
                  }
                />
              </Label>
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
                  border={
                    touched.password &&
                    errors.password &&
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
              <Button type="submit">
                <H3 WHITE>Sign Up</H3>
              </Button>
              <br />
              <H3 REGULAR>
                Already a user? <NavLink to="/login">Login</NavLink>
              </H3>
            </Forms>
          </UnSkewDivSecondary>
        </SkewDivSecondary>
      </ParentBackgroundSecondary>
    </FlexRowBackground>
  );
};

const validationSchema = yup.object().shape({
  fullName: yup.string().required('Please provide a full name'),
  email: yup
    .string()
    .email('Email is not valid')
    .required('Please provide an email'),
  password: yup
    .string()
    .required('Please provide a password')
    .min(8, 'Password too short'),
  password2: yup
    .string()
    .required("Passwords don't match")
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Register = withFormik({
  mapPropsToValues: () => ({
    password: '',
    password2: '',
    email: '',
    fullName: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.userSignUp(
      {
        email: values.email,
        password: values.password,
        fullName: values.fullName,
      },
      props.history,
    );
    setSubmitting(false);
  },
  validationSchema,
})(SignUpForm);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { userSignUp })(Register);
