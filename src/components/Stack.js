import React from 'react';
import { StackNavigator } from 'react-navigation';
import NavigationProps from '../../NavigationProps';
import Halls from './Halls';

export const RootStack = StackNavigator({
  Home: {
    screen: NavigationProps,
  },
  HallsScreen: {
    screen: Halls,
    navigationOptions:{
      title: "Halls"
    }
  },
  initialRouteName: 'Home',
});
