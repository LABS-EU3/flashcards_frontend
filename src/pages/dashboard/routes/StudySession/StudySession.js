import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Line } from 'rc-progress';
// import ReactCardFlip from 'react-card-flip';

import styled from 'styled-components';
import { H2 } from '../../../../styles/typography';
import './studysession.css';

const dummyData = [
  { id: 1, Question: 'Happiness', score: 10, Answer: 'my answer1' },
  { id: 4, Question: 'Chinwe', score: 9, Answer: 'my answer2' },
  { id: 8, Question: 'Bobby', score: 8, Answer: 'my answer3' },
  { id: 100, Question: 'Alex', score: 7, Answer: 'my answer4' },
  { id: 10, Question: 'Jane', score: 6, Answer: 'my answer5' },
  { id: 30, Question: 'Tade', score: 5, Answer: 'my answer6' },
  { id: 14, Question: 'Miracle', score: 4, Answer: 'my answer7' },
  { id: 7, Question: 'Peace', score: 3, Answer: 'my answer8' },
  { id: 25, Question: 'Joy', score: 2, Answer: 'my answer9' },
  { id: 2, Question: 'Alex', score: 1, Answer: 'my answer10' },
];

export const Container = styled.div`
  background-color: transparent;
  background: white;
  width: 100%;
  height: 100%;
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

export const EmojisCompDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CardContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 2.5% auto;
  /* padding-top: 1%;
  padding-bottom: 5%;
  background: #ffffff; */
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
  /* margin-top: 2%; */
  margin: 2% auto 0 auto;
  background: #ffffff;
  /* border: 1px solid #f6f1f0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
  text-align: center; */

  /* &:first-child {
    background: rgba(255, 169, 135, 0.5);
  } */
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
  /* justify-content: center; */
  /* justify-content: space-between; */
  width: 90%;
  margin: 5% auto auto auto;
`;

export const Scene = styled.div``;
export const SceneCard = styled.div``;
export const CardFace = styled.div``;

export default function CarouselComponent() {
  /* eslint-disable */

  const [state, setState] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    e.preventDefault();
  }

  // const myRef = React.createRef();
  // if (myRef) {
  //   console.log('111111', myRef);
  // }
  // function handleClick() {
  //   console.log('kkkk', myRef);
  //   console.log('kkkk', myRef.current.classList[0]);
  //   console.log('kkkk', myRef.current.classList.toggle('is-flipped'));
  //   // myRef.current.classList.toggle('is-flipped');
  //   // if (myRef.current.classList[0] === 'card') {
  //   //   // return myRef.current.classList.setAttribute('class', 'is-flipped');
  //   // }
  // }
  let cards = document.getElementsByClassName('card');
  function onFocus() {
    // if (document.getElementById('joba')) {
    if (cards) {
      // document.getElementById('joba').add('class', 'highlight');
      // document.getElementById('joba').style.display = 'none';
      // document.getElementById('joba').classList.toggle('is-flipped');
      console.log(
        // document
        //   .getElementsByClassName('card')[0]
        //   .classList.toggle('is-flipped'),
        cards,
      );
      // document.getElementsByClassName('card').forEach(element => {
      //   console.log(element);
      // });

      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('is-flipped');
      }
    }
  }

  return (
    <Container>
      <TopCompDiv>
        <CardContainer>
          <Carousel
            showThumbs={false}
            swipeable
            // onClickItem={handleClick}
            // centerMode // centerSlidePercentage={1}
          >
            {dummyData.map((data, index) => {
              return (
                // <>
                // <Card key={`${data.id}`}>
                //   <H2>{index + 1}</H2>
                //   <H2>{data.Question}</H2>
                //   <P>
                //     {data.score} <br /> Points
                //   </P>
                // </Card>

                // <ReactCardFlip
                //   isFlipped={state.isFlipped}
                //   flipDirection="vertical"
                // >

                // <div className="scene">
                //   <div class="card" onClick={onFocus}>
                //     <Card
                //       key={`${data.id}`}
                //       className="card__face card__face--front"
                //     >
                //       <H2>{index + 1}</H2>
                //       <H2>{data.Question}</H2>
                //       <P>
                //         {data.score} <br /> Points
                //       </P>
                //     </Card>

                //     <Card
                //       key={`${data.id}`}
                //       className="card__face card__face--back"
                //     >
                //       This is the back of the card.
                //       <H2>{index + 1}</H2>
                //       <H2>{data.Answer}</H2>
                //     </Card>
                //   </div>
                // </div>
                // </ReactCardFlip>
                // </>

                <div className="scene">
                  <div class="card" onClick={onFocus}>
                    <div className="card__face card__face--front">
                      front
                      {index}
                    </div>
                    <div className="card__face card__face--back">
                      back
                      {index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </CardContainer>
      </TopCompDiv>

      <BottomCompDiv>
        <EmojisCompDiv>
          <span class="emoji">&#129303;</span>
          <span class="emoji">&#128531;</span>
          <span class="emoji">&#128557;</span>
        </EmojisCompDiv>

        <MLower>
          <H2>Organic Compounds</H2>
          <Line
            percent={50}
            strokeLineColor="red"
            strokeWidth="4"
            trailWidth="4"
            trailColor="#fafafa"
            strokeColor="#FFA987"
            className="pBar2"
          />
          <h2 class="bottomh2">15/30 Cards</h2>
        </MLower>
      </BottomCompDiv>
    </Container>
  );
}

// <div className="scene scene--card">
//   <div class="card" onClick={onFocus}>
//     <div className="card__face card__face--front">
//       front
//                       {index}
//     </div>
//     <div className="card__face card__face--back">
//       back
//                       {index + 1}
//     </div>
//   </div>
// </div>
