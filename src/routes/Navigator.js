// react library imports
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// presentational component imports
import * as ROUTES from './Routes';
import Dashboard from '../views/Dashboard';

const PublicStack = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        key={ROUTES.pageNameDashoboard}
        name={ROUTES.pageNameDashoboard}
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
    </PublicStack.Navigator>
  );
};
