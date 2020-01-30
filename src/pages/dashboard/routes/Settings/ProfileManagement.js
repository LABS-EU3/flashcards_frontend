// Import

// Libraries
import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
// import { SquareLoader } from 'react-spinners';

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
  } = props;

  // const [response, setResponse] = useState(null);

  // useEffect(() => {
  //   if () {
  //     setResponse(
  //       <H3 color={c.SUCCESS_COLOR}>
  //         Profile update successfully
  //       </H3>,
  //     );
  //   }
  //   if (user.errors) {
  //     setResponse(
  //   <H3 color={c.DANGER_COLOR}>
  //     Error while upadting profile
  //   </H3>
  // );
  //   }
  // }, []);
  return (
    <Forms onSubmit={handleSubmit}>
      {/* {response} */}
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
      <Label>
        <H3>Email</H3>
        {touched.email && errors.email && (
          <Text color={c.DANGER_COLOR}>{errors.email}</Text>
        )}
        <Input
          type="email"
          name="email"
          value={values.email.toLowerCase()}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
          border={
            touched.email && errors.email && `2px solid ${c.DANGER_COLOR}`
          }
        />
      </Label>
      <Button2 type="submit">
        <H3 color={c.DARK_GRAY}>
          Submit
          {/* <SquareLoader
            css={{ marginLeft: '20px' }}
            size={15}
            color="#FFA987"
            loading={user.loading}
          /> */}
        </H3>
      </Button2>
    </Forms>
  );
};

const validationSchema = yup.object().shape({
  fullName: yup.string().required('Please provide your full name'),
  email: yup
    .string()
    .email('Email is not valid')
    .required('Please provide your email'),
});

const PMForm = withFormik({
  mapPropsToValues: () => ({
    fullName: '',
    email: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.manageProfile(
      {
        fullName: values.fullName,
        email: values.email,
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
