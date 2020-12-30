import React from 'react';
import { StateManager } from './StateManager/Store'
import Router from './Router'
import { Theme } from './theme';

export default () => (
  <StateManager>
    <Theme>
      <Router />
    </Theme>
  </StateManager>
)