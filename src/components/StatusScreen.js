
import React from 'react';
import {  StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';

import Button from 'react-native-button';


class StatusScreen extends React.Component{



  state = {
    id: '',
  };

  render(){

    let data = [{
      value: 'Hall',
    }, {
      value: 'Court',
    }, {
      value: 'GuestRoom',
    }

  ];


      let { id } = this.state;

    return(

      <View style={styles.container}>
        <ScrollView>


          <View style={styles.textview}>
                <TextField

                 label='Enter your ID'
                 labelFontSize ={20}
                 baseColor='rgba(0,0,0,1)'
                 textColor='rgba(0,0,0,1)'
                 value={id}
                 onChangeText={ (id) => this.setState({ id }) }
               />
           </View>

           <View style={styles.dropdownview}>

           <Dropdown

           dropdownOffset={{top:10,left:100}}
           containerStyle={{borderWidth:1, borderColor:'lightgrey',width:260,height:40,  backgroundColor:'#158c7a'}}
           rippleCentered={true}
           inputContainerStyle={{ borderBottomColor: 'transparent' }}
           fontSize = {15}
           labelFontSize= {20}
           baseColor = 'rgba(255,255,255,1)'
             label='                           Category     '
             data={data}

           />
       </View>
       <View style={styles.buttonContainer}>
       <Button
             containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#000000',marginTop:20}}
             disabledContainerStyle={{backgroundColor: 'grey'}}
                style={{fontSize: 20, color: '#FFFFFF'}}
                styleDisabled={{color: 'red'}}
                onPress={() => navigate('HallsScreen')}>
                Check
      </Button>
    </View>

        </ScrollView>

      </View>


    );
  }
}

export default StatusScreen;

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    //justifyContent:'space-between',
   alignItems: 'center'
  },
  dropdownview: {
    //flex:0.8,
    marginTop: 15,

  },
  textview:{
    marginLeft:5,
    marginRight:10
  },
  buttonContainer:{
    margin: 50
  }

});
