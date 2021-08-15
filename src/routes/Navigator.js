// react library imports
import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
// presentational component imports
import * as ROUTES from './Routes';
import Dashboard from '../views/Dashboard';
import Details from '../views/Details';
import {ConstantText} from '../utills/ConstantText';
import {ColourPalette} from '../assets/styles/ColourPalette';

const PublicStack = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <PublicStack.Navigator
      screenOptions={{
        headerTintColor: ColourPalette.black,
        headerBackTitleStyle: {
          fontSize: 16,
          fontFamily: ConstantText.font_family,
          fontWeight: ConstantText.font_bold3,
        },
      }}>
      <PublicStack.Screen
        key={ROUTES.pageNameDashoboard}
        name={ROUTES.pageNameDashoboard}
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <PublicStack.Screen
        key={ROUTES.pageNameDetails}
        name={ROUTES.pageNameDetails}
        component={Details}
        options={{
          title: '',
          headerShown: true,
          headerBackTitle: ConstantText.back,
          headerTitle:
            Platform.OS === ConstantText.platform_android
              ? ConstantText.back
              : null,
        }}
      />
    </PublicStack.Navigator>
  );
};
