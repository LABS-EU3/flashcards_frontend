import React from 'react';
import './App.css';
import { H1, H3 } from './styles/typography';
import { Button, LineButton } from './styles/buttons';
import {
  ParentBackground,
  SkewDiv,
  UnSkewDiv,
  TopTriangle,
  BottomTriangle,
} from './styles/background';

function App() {
  return (
    <div>
      <ParentBackground>
        <TopTriangle />
        <SkewDiv>
          <UnSkewDiv>
            <H1>Welcome to Quick Decks!</H1>
            <Button>
              <H3 WHITE>Login</H3>
            </Button>
            <LineButton>
              <H3 PRIMARY>Login</H3>
            </LineButton>
          </UnSkewDiv>
        </SkewDiv>
        <BottomTriangle />
      </ParentBackground>
    </div>
  );
}

export default App;
