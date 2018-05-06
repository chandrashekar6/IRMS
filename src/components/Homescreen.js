import React from 'react';
import {  StyleSheet, Text, View, Image, Alert } from 'react-native';

import Button from 'react-native-button';

// import { StackNavigator } from 'react-navigation';
// import { RootStack } from './Stack';

class Homescreen extends React.Component{
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>

          <Image source={require( '../../Logo.png')}
            style={styles.img}
            />
          <View>
            <Text style={styles.text}>RESOURCE BOOKING</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
                  containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white',marginTop:20}}
                  disabledContainerStyle={{backgroundColor: 'grey'}}
                     style={{fontSize: 20, color: '#158c7a'}}
                     styleDisabled={{color: 'red'}}
                     onPress={() => navigate('HallsScreen')}>
                    Halls
           </Button>
           <Button
                     containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white',marginTop:20}}
              disabledContainerStyle={{backgroundColor: 'grey'}}
              style={{fontSize: 20, color: '#158c7a'}}
              styleDisabled={{color: 'red'}}
              onPress={() => this._handlePress()}>
              Courts
            </Button>

              <Button
                containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white',marginTop:20}}
              disabledContainerStyle={{backgroundColor: 'grey'}}
              style={{fontSize: 20, color: '#158c7a'}}
              styleDisabled={{color: 'red'}}
              onPress={() => this._handlePress()}>
              Guest Rooms
              </Button>

              <Button
                containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#FFF000',marginTop:20}}
              disabledContainerStyle={{backgroundColor: 'grey'}}
              style={{fontSize: 20, color: '#000000'}}
              styleDisabled={{color: 'red'}}
              onPress={() => navigate('StatusScreen')}>
              Check Status
              </Button>

          </View>



    </View>
    );
  }
}

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#158c7a',
    alignItems: 'center'

  },
  img: {
    backgroundColor: '#214B8C',
    width:700,
   height:200,
   borderColor:'black'
//    marginTop:30

  },
  buttonContainer: {
   margin: 20
 },
 text:{
   color: 'white',
   marginTop:20,
   textAlign: 'center',
   fontSize: 40,
   fontFamily: 'acme_regular'

 }

});
