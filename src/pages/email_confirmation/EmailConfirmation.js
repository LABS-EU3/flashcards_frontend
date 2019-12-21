// Import

// Libraries
// import React from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import axios from 'axios';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import { emailConfirmation } from '../../modules/user/userActions';

// Styled
import { H1, P } from '../../styles/typography';

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
// import { Button } from '../../styles/buttons';

// export default function EmailConfirmation(props) {
function EmailConfirmation(props) {
  console.log('pppppp', props);
  // const history = useHistory();
  // const tokenFromUrl = useParams();
  // console.log('token from url', tokenFromUrl);
  // console.log('history', history);
  // axios
  //   .post(
  //     `https://quickdecks-staging.herokuapp.com/api/auth/confirm`,
  //     tokenFromUrl,
  //   )
  //   .then(res => {
  //     console.log('confirm response', res);
  //     history.push('/dashboard');
  //   })
  //   .catch(err => {
  //     console.log('error request', err.request);
  //     console.log('error response', err.response);
  //     return err.response;
  //   });

  const { handleSubmit } = props;
  // console.log('....>>', props.match.params.token);
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <>
      {/* {handleSubmit()} */}
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
                <P LIGHTWEIGHT>Your Email EmailConfirmation was successful! </P>
                <br />
                {/* <Button onClick={handleSubmit}>submit</Button> */}
              </FlexColumnSpaceBetween>
            </UnSkewDiv>
          </SkewDiv>
          <BottomTriangle />
        </ParentBackground>
      </FlexRowBackground>
    </>
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
