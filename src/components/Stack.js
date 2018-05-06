import React from 'react';
import { StackNavigator } from 'react-navigation';
import NavigationProps from '../../NavigationProps';
import Halls from './Halls';
import HallBook from './HallBook';
import Homescreen from './Homescreen';
import StatusScreen from './StatusScreen';
import TabNav from './Stack1';

export const RootStack = StackNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions:{
      title:"HOME",
      headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#158c7a',
            borderBottomColor: '#ffffff',
          //  borderBottomWidth: 3,
          }
    }
  },
  HallsScreen: {
    screen: TabNav,
    navigationOptions:{
      title: "HALLS",
      headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#158c7a',
            borderBottomColor: '#ffffff',
          //  borderBottomWidth: 3,
          }
    }
  },
  HallsBook: {
    screen: HallBook,
     navigationOptions: ({ navigation }) => {
      const { state: { params = {} } } = navigation;
      return {
        title: params.hallId,
        headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#158c7a',
              borderBottomColor: '#ffffff',
              borderBottomWidth: 3,
            }
      };
    }
  },
  StatusScreen: {
    screen: StatusScreen,
    navigationOptions:{
      title: "Status",
      headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#158c7a',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
          }
    }
  },
  initialRouteName: 'Home',
});
