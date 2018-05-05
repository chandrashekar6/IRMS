import React from 'react';
import Homescreen from './src/components/Homescreen'

class NavigationProps extends React.Component{
  static navigationOptions = {
    title: "Home"
  }
  render(){
    return(
      <Homescreen navigationStuff = {this.props.navigation} />
    )
  }
}

export default NavigationProps;
