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

        <View style={styles.heading}>
          <Text style={styles.text}>HALLS - FIRST FLOOR</Text>
        </View>

      <View style={styles.hallicon}>

        <View style={styles.icontext}>
          <Icon style={styles.icon}
          name='home'
          type='font-awesome'
          size={100}
          color='white'
          />
        <Text style={styles.hallno}>H11</Text>
       </View>

       <View style={styles.icontext}>
          <Icon style={styles.icon}
          name='home'
          type='font-awesome'
          size={100}
          color='white'
          />
        <Text style={styles.hallno}>H12</Text>
     </View>

    <View style={styles.icontext}>
      <Icon style={styles.icon}
      name='home'
      type='font-awesome'
      size={100}
      color='white'
      />
    <Text style={styles.hallno}>H13</Text>
  </View>

  <View style={styles.icontext}>
    <Icon style={styles.icon}
    name='home'
    type='font-awesome'
    size={100}
    color='white'
    />
  <Text style={styles.hallno}>H14</Text>
</View>

<View style={styles.icontext}>
  <Icon style={styles.icon}
  name='home'
  type='font-awesome'
  size={100}
  color='white'
  />
<Text style={styles.hallno}>H15</Text>
</View>

<View style={styles.icontext}>
  <Icon style={styles.icon}
  name='home'
  type='font-awesome'
  size={100}
  color='white'
  />
<Text style={styles.hallno}>H16</Text>
</View>

<View style={styles.icontext}>
  <Icon style={styles.icon}
  name='home'
  type='font-awesome'
  size={100}
  color='white'
  />
<Text style={styles.hallno}>H17</Text>
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
    backgroundColor: '#214B8C',
    flexDirection:'column'


  },
  heading:{
    flex:0.2
  },
  text:{
    color: 'white',
    marginTop:20,
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Roboto'

  },
  hallno:{
    textAlign:'center',
    color:'white',
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
