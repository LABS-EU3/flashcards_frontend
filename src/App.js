import React from 'react';
import './App.css';
import { H1, H3 } from './styles/typography';
import { Button, LineButton } from './styles/buttons';

function App() {
  return (
    <div>
      <H1>Welcome to Quick Decks!</H1>
      <Button>
        <H3 WHITE>Login</H3>
      </Button>
      <LineButton>
        <H3 PRIMARY>Login</H3>
      </LineButton>
    </div>
  );
}

export default App;
