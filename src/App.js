/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// container component
import PrimaryContainer from './containers';

const App = (): Node => {
  return (
    <NavigationContainer>
      <PrimaryContainer />
    </NavigationContainer>
  );
};

export default App;
