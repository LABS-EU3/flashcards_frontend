// Import

// Libraries
import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
// import { SquareLoader } from 'react-spinners';

// Styles
import { Text, H3 } from '../../../../styles/typography';
import { LineButton } from '../../../../styles/buttons';
import * as c from '../../../../styles/variables/colours';
import { Forms, Input, Label } from '../../../../styles/forms';

// Actions
import { manageAccount } from '../../../../modules/user/userActions';

const PasswordManagementForm = props => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = props;

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
      <LineButton type="">
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
})(PasswordManagementForm);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { manageAccount })(AMForm);
