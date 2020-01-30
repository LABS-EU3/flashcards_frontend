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
import { Forms, Label, TextArea } from '../../../../styles/forms';

// Actions
import { submitHelpCenterMsg } from '../../../../modules/user/userActions';

const HelpCenterForm = props => {
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
  //         Message sent successfully
  //       </H3>,
  //     );
  //   }
  //   if (user.errors) {
  //     setResponse(<H3 color={c.DANGER_COLOR}>Error Sending message</H3>);
  //   }
  // }, []);

  return (
    <Forms onSubmit={handleSubmit}>
      {/* {response} */}

      <Label>
        {/* <H2 color="#3399FF">Help Center</H2> */}
        {touched.helpCenter && errors.helpCenter && (
          <Text color={c.DANGER_COLOR}>{errors.helpCenter}</Text>
        )}
        <TextArea
          name="helpCenter"
          placeholder="Let us know how we can help or improve"
          value={values.helpCenter}
          rows="10"
          cols="40"
          autoFocus
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Label>

      <Button2 type="">
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
  helpCenter: yup.string().required('Can not send empty mail'),
});

const HCForm = withFormik({
  mapPropsToValues: () => ({
    helpCenter: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.submitHelpCenterMsg(
      {
        helpCenter: values.helpCenter,
      },
      props.history,
    );
    setSubmitting(false);
  },
  validationSchema,
})(HelpCenterForm);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { submitHelpCenterMsg })(HCForm);
