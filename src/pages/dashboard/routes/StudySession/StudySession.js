/* eslint-disable */
import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Line } from 'rc-progress';
import { connect } from 'react-redux';

import StudyCard from '../StudyCard';
import {
  getSingleDeck,
  fetchSingleSession,
} from '../../../../modules/dashboard/dashboardActions';
import styled from 'styled-components';
import { H2, H1, H5 } from '../../../../styles/typography';
import './studysession.css';
import { BackArrowButton } from '../../../../styles/buttons';
import BackArrow from '../../../../assets/icons/Arrow 1.svg';
import { useHistory } from 'react-router';

export const Container = styled.div`
  background-color: transparent;
  background: white;
  width: 100%;
  height: 100%;
  h1 {
    text-align: center;
    align-self: center;
    margin: 0 auto;
  }
  /* margin: 0 auto; */
`;

export const TopCompDiv = styled.div`
  display: flex;
  text-align: center;
  margin: 30px auto;
`;

export const BottomCompDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  text-align: center;
  margin: 30px auto;
`;

export const CardContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 2.5% auto;
  border: 1px solid #f6f1f0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);

  @media (max-width: 840px) {
    width: 80%;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  height: 300px;
  margin: 2% auto 0 auto;
  background: #ffffff;

  @media (min-width: 2000px) {
    width: 600px;
  }
  @media (max-width: 1050px) {
    width: 278px;
  }
  @media (max-width: 840px) {
    width: 90%;
  }
`;

export const MLower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 5% auto auto auto;
`;

const CarouselComponent = ({ match, dashboard, fetchSession }) => {
  let history = useHistory();
  const { sessionId } = match.params;
  const { selectedSession, sessionCards } = dashboard;

  useEffect(() => {
    fetchSession(sessionId);
  }, [fetchSession, sessionId]);

  return (
    <Container>
      {sessionCards.length <= 0 ? (
        <div>
          <BackArrowButton
            onClick={() => {
              history.push('/dashboard/study');
            }}
          >
            <img src={`${BackArrow}`} alt="back arrow" />
            <H5>Back</H5>
          </BackArrowButton>
          <H1>Please add cards to use this deck </H1>
        </div>
      ) : (
        <div>
          <BackArrowButton
            onClick={() => {
              history.push('/dashboard/study');
            }}
          >
            <img src={`${BackArrow}`} alt="back arrow" />
            <H5>Back</H5>
          </BackArrowButton>
          <TopCompDiv>
            <CardContainer>
              <Carousel
                showThumbs={false}
                showIndicators={false}
                useKeyboardArrows={true}
                swipeable
              >
                {sessionCards.map((data, index) => {
                  return <StudyCard key={index} card={data} />;
                })}
              </Carousel>
            </CardContainer>
          </TopCompDiv>
          <BottomCompDiv>
            <MLower>
              <H2>{selectedSession.name}</H2>
              <Line
                percent={50}
                strokelinecolor="red"
                strokeWidth="4"
                trailWidth="4"
                trailColor="#fafafa"
                strokeColor="#FFA987"
                className="pBar2"
              />
              {/* <h2 className="bottomh2">15/30 Cards</h2> */}
            </MLower>
          </BottomCompDiv>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, {
  getDeck: getSingleDeck,
  fetchSession: fetchSingleSession,
})(CarouselComponent);
