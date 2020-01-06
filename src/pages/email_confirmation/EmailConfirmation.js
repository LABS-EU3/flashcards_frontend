// Import

// Libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';

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
  const { handleSubmit } = props;
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
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
  );
}

const Confirm = withFormik({
  mapPropsToValues: props => ({
    token: props.match.params.token,
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.emailConfirmation(values.token, props.history);
    setSubmitting(true);
  },
})(EmailConfirmation);

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { emailConfirmation })(Confirm);
