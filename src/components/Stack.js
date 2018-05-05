import React from 'react';
import { StackNavigator } from 'react-navigation';
import NavigationProps from '../../NavigationProps';
import Halls from './Halls';
import HallBook from './HallBook';
import Homescreen from './Homescreen';



export const RootStack = StackNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions:{
      title:"HOME",
    }
  },
  HallsScreen: {
    screen: Halls,
    navigationOptions:{
      title: "Halls"
    }
  },
  HallsBook: {
    screen: HallBook,
     navigationOptions: ({ navigation }) => {
      const { state: { params = {} } } = navigation;
      return {
        title: params.hallId
      };
    }
  },
  initialRouteName: 'Home',
});
