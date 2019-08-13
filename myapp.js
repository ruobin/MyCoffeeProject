/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
<script src="http://localhost:8097"></script>
import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import CafeListScreen from './screens/CafeListScreen';
import CafeDetailsScreen from './screens/CafeDetailsScreen';

const MainNavigator = createStackNavigator(
  {
    Home: CafeListScreen,
    Details: CafeDetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const myapp = createAppContainer(MainNavigator);

export default myapp;
