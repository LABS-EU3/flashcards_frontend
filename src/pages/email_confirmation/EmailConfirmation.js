// Import

// Libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { withFormik } from 'formik';

import { emailConfirmation } from '../../modules/user/userActions';

// Styled
import { H1, H3 } from '../../styles/typography';

import { FlexColumnSpaceBetween } from '../../styles/displayFlex';
import {
  BottomTriangle,
  ParentBackground,
  TopTriangle,
  SkewDiv,
  UnSkewDiv,
  FlexRowBackground,
  DesktopImage,
} from '../../styles/background';

import KnowledgeSVG from '../../assets/images/undraw_knowledge_g5gf.svg';

function EmailConfirmation(props) {
  console.log('pppppp', props);

  const { match, history } = props;
  // const { handleSubmit } = props;
  // useEffect(() => {
  //   handleSubmit();
  // }, []);
  useEffect(() => {
    props.emailConfirmation(match.params.token, history);
  }, []);

  return (
    console.log('[[[[[', props),
    (
      <FlexRowBackground>
        <DesktopImage>
          <img src={`${KnowledgeSVG}`} alt="knowledagble person" />{' '}
        </DesktopImage>
        <ParentBackground>
          <TopTriangle />
          <SkewDiv>
            <UnSkewDiv>
              <FlexColumnSpaceBetween>
                <H1 REGULAR>Welcome to QuickDeck</H1>
                <H3 LIGHTWEIGHT>Your Email Confirmation was successful! </H3>
                <H3 LIGHTWEIGHT>Kindly wait while we log you in</H3>
                <br />
              </FlexColumnSpaceBetween>
            </UnSkewDiv>
          </SkewDiv>
          <BottomTriangle />
        </ParentBackground>
      </FlexRowBackground>
    )
  );
}

// const Confirm = withFormik({
//   mapPropsToValues: props => ({
//     token: props.match.params.token,
//   }),
//   handleSubmit: (values, { props, setSubmitting }) => {
//     console.log('jjj', values, props.emailConfirmation);
//     props.emailConfirmation(values.token, props.history);
//     setSubmitting(true);
//   },
// })(EmailConfirmation);

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     // mapPropsToValues: {
//     //   token: ownProps.match.params.token,
//     // },
//     emailConfirmation2: (props1, props2) => {
//       dispatch(
//         emailConfirmation(props1.token, props2),
//         console.log('ttttttt', props1, props2),
//       );
//     },
//   };
// };

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { emailConfirmation })(
  EmailConfirmation,
);
