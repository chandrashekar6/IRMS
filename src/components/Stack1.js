import React from 'react';
import { TabNavigator, TabView } from 'react-navigation';
import NavigationProps from '../../NavigationProps';
import HallsGround from './HallsGround';
import HallsFirst from './HallsFirst';
import HallsSecond from './HallsSecond';

const TabNav = TabNavigator(
{

tab0: {
  screen: HallsGround,
  navigationOptions:{
    title:"G Floor"
  }
},
tab1: {
  screen: HallsFirst,
  navigationOptions:{
    title:"1st Floor"
  }
},
tab2: {
    screen: HallsSecond,
    navigationOptions:{
      title: "2nd Floor"
    }
  }
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {

    style: {
      backgroundColor: '#158c7a',

      justifyContent:'center'

    }
  }
}
);
export default TabNav;
