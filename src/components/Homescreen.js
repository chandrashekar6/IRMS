import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { RootStack } from './Stack';

class Homescreen extends React.Component{
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    const { navigate } = this.props.navigationStuff
    return (
      <View style={styles.container}>
          <Image source={require( '../../HWlogo1.png')}
            style={styles.img}
            />
          <View>
            <Text style={styles.text}>Resource Booking</Text>
          </View>
          <View style={styles.buttonContainer}>
    <Button title="         Halls       "
    onPress={() => navigate('HallsScreen')} />
  </View>
  <View style={styles.buttonContainer}>
<Button title="       Courts        "
accessibilityLabel="Learn more about this purple button" />
</View>
<View style={styles.buttonContainer}>
<Button title="   Guest Rooms   "
accessibilityLabel="Learn more about this purple button" />
</View>



    </View>
    );
  }
}

export default Homescreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#214B8C',
    alignItems: 'center'

  },
  img: {
    backgroundColor: '#214B8C',
    width:180,
    height:180,
    marginTop:30

  },
  buttonContainer: {
   margin: 20
 },
 text:{
   color: 'white',
   marginTop:20,
   textAlign: 'center',
   fontSize: 40,
   fontFamily: 'Roboto'

 }

});
