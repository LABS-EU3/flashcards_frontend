import React from 'react';
import './App.css';
import { H1, H3 } from './styles/typography';
import { Button, LineButton } from './styles/buttons';
import {
  ParentBackgroundSecondary,
  SkewDivSecondary,
  UnSkewDivSecondary,
} from './styles/background';
import { Form, Input, Label } from './styles/forms';

function App() {
  return (
    <div>
      <ParentBackgroundSecondary>
        <SkewDivSecondary>
          <UnSkewDivSecondary>
            <H1>Welcome to Quick Decks!</H1>
            <Form>
              <Label>
                <H3> Email</H3>
                <Input type="text" name="email" placeholder="Email" />
              </Label>
              <Button>
                <H3 WHITE>Login</H3>
              </Button>
              <LineButton>
                <H3 PRIMARY>Login</H3>
              </LineButton>
            </Form>
          </UnSkewDivSecondary>
        </SkewDivSecondary>
      </ParentBackgroundSecondary>
    </div>
  );
}

export default App;
