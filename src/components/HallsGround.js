import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
// import { StackNavigator } from 'react-navigation';
// import { RootStack } from './Stack';

class Halls extends React.Component{
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {

    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>

        <View style={styles.heading}>
          <Text style={styles.text}>CLASSROOMS</Text>
        </View>

      <View style={styles.hallicon}>

        <View style={styles.icontext}>
          <Icon style={styles.icon}
          name='home'
          type='font-awesome'
          size={100}
          color='#4d1291'
            onPress={() => navigate('HallsBook',{hallId : 'H01'})}
          />
        <Text style={styles.hallno}>H01</Text>
       </View>

       <View style={styles.icontext}>
          <Icon style={styles.icon}
          name='home'
          type='font-awesome'
          size={100}
          color='#4d1291'
          onPress={() => navigate('HallsBook',{hallId : 'H02'})}
          />
        <Text style={styles.hallno}>H02</Text>
     </View>

    <View style={styles.icontext}>
      <Icon style={styles.icon}
      name='home'
      type='font-awesome'
      size={100}
      color='#4d1291'
      onPress={() => navigate('HallsBook',{hallId : 'H03'})}
      />
    <Text style={styles.hallno}>H03</Text>
  </View>

  <View style={styles.icontext}>
    <Icon style={styles.icon}
    name='home'
    type='font-awesome'
    size={100}
    color='#4d1291'
    onPress={() => navigate('HallsBook',{hallId : 'H04'})}
    />
  <Text style={styles.hallno}>H04</Text>
</View>

<View style={styles.icontext}>
  <Icon style={styles.icon}
  name='home'
  type='font-awesome'
  size={100}
  color='#4d1291'
  onPress={() => navigate('HallsBook',{hallId : 'H05'})}
  />
<Text style={styles.hallno}>H05</Text>
</View>


    </View>
  </View>
    );
  }
}

export default Halls;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:'column'


  },
  heading:{
    flex:0.15
  },
  text:{
    color: '#158c7a',
    marginTop:20,
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'acme_regular'

  },
  hallno:{
    textAlign:'center',
    color:'#158c7a',
    fontSize: 30
  },
 hallicon: {
   flex: 0.7,
   flexDirection: 'row',
   justifyContent:'space-evenly',
   alignItems: 'stretch',
   flexWrap: 'wrap'


 },
 icon:{
  // marginLeft:20,
  // marginBotton: 20

 }
});
