import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

class Halls extends React.Component{
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {

    return (
      <View style={styles.container}>
      <View style={styles.hallicon}>
          <Icon style={styles.icon}
          name='home'
          type='font-awesome'
          size={50}
          color='white'
          />

              <Icon style={styles.icon}
              name='home'
              type='font-awesome'
              size={50}
              color='white'
              />
              </View>
    </View>
    );
  }
}

export default Halls;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#214B8C',
    alignItems: 'center'

  },
 hallicon: {
   flex: 0.5,
   flexDirection: 'row',
   justifyContent:'space-between',
  

 },
 icon:{
   margin: 50
 }
});
