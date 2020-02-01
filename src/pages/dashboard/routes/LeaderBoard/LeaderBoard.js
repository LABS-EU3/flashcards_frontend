import React, { useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchRankings } from '../../../../modules/user/userActions';

import { H1, H2, P, H3 } from '../../../../styles/typography';

export const Container = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

export const TopCompDiv = styled.div`
  text-align: center;
  margin: 30px auto;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 2.5% auto;
  padding-top: 1%;
  padding-bottom: 5%;
  background: #ffffff;
  border: 1px solid #f6f1f0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);

  @media (max-width: 840px) {
    width: 80%;
  }
`;

export const MyHR = styled.hr`
  width: 400px;
  height: 1px;
  border: 0;
  background: linear-gradient(
    88.85deg,
    rgba(210, 31, 60, 0.5) 38.43%,
    rgba(255, 169, 135, 0.5) 136.86%
  );

  @media (min-width: 2000px) {
    width: 500px;
  }
  @media (max-width: 1050px) {
    width: 278px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  height: 53px;
  margin-top: 2%;
  background: #ffffff;
  border: 1px solid #f6f1f0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
  text-align: center;

  &:first-child {
    background: rgba(255, 169, 135, 0.5);
  }
  @media (min-width: 2000px) {
    width: 600px;
  }
  @media (max-width: 1050px) {
    width: 278px;
  }
`;

export const Loading = styled.div`
  color: #333;
  font-size: 2rem;
  text-align: center;
  margin-top: 1.2rem;
`;

export const Errors = styled.div`
  color: #f00;
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 0.5em;
`;

export default function LeaderBoard() {
  const dispatch = useDispatch();
  const rankings = useSelector(state => state.user.rankings);
  const loading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.errors);

  useEffect(() => {
    dispatch(fetchRankings());
  }, []);

  return (
    <Container>
      <TopCompDiv>
        <H1 lineHeight="1.5em">Rankings</H1>
        <MyHR />
      </TopCompDiv>
      <Errors>{error && error.message}</Errors>
      <CardContainer>
        <PropagateLoader size={30} color="#FFA987" loading={loading} />
        {!loading &&
          (rankings.length ? (
            rankings.map((data, index) => {
              return (
                <Card key={`${data.id}-${index + 1}`}>
                  <H2>{index + 1}</H2>
                  <H2>{data.full_name}</H2>
                  <P>
                    {data.score} <br /> Points
                  </P>
                </Card>
              );
            })
          ) : (
            <Loading>
              <H3>No rankings to display yet</H3>
            </Loading>
          ))}
      </CardContainer>
    </Container>
  );
}
