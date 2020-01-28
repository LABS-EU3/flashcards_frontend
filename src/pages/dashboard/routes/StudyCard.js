/* eslint-disable */
import React, { useState } from 'react';
import { H1 } from '../../../styles/typography';

export default function StudyCard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handlerEvent = event => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="scene" onClick={handlerEvent}>
      <div className="card">
        {!isFlipped && (
          <div>
            <H1>front</H1>
          </div>
        )}
        {isFlipped && (
          <div>
            <H1>back</H1>
          </div>
        )}
      </div>
    </div>
  );
}
