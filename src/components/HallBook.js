import React from 'react';
import { StyleSheet, Text, View, Image, Alert,ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import { Icon } from 'react-native-elements';

import DatePicker from 'react-native-datepicker';
import Button from 'react-native-button';


var moment = require('moment');
var str;
class HallBook extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     selectedStartDate: null,
     selectTime: null,
     eventtype: '',
     id: '',
   };
   this.onChange = this.onChange.bind(this);
   this.handlePress = this.handlePress.bind(this);
 }
  onChange(value){
    var x = this.state.selectedStartDate.concat(" ", value)
    this.setState({
      selectTime: x
    })
    console.log(this.state.selectTime)
  }

  handlePress(){
    var x = [this.state.selectTime, this.state.eventtype, this.state.id]
    fetch('http://172.20.10.2:3000/n1/',{
      method: 'POST',
      body: JSON.stringify({
        first: this.state.selectTime,
        second: this.state.eventtype
      })
    })
    .catch(function (err) {
        console.log(err)
        return err;
      });
    console.log(x)
  }


  render() {

    const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    let data = [{
      value: '08:00:00',
    }, {
      value: '09:00:00',
    }, {
      value: '10:00:00',
    },{
    value: '11:00:00',
  }, {
    value: '12:00:00',
  }, {
    value: '14:00:00',
  }, {
  value: '15:00:00',
}, {
  value: '16:00:00',
}, {
  value: '17:00:00',
}


  ];

    let { eventtype } = this.state;
    let { id } = this.state;

  var curdate = moment().format('YYYY-MM-DD');
  var maximumdate= moment().add(1, 'months').format('YYYY-MM-DD');


    return (
      <View style={styles.container}>
        <ScrollView>
        <View>
            <Image source={require( '../../Hall.png')}
              style={styles.img}
              />
          </View>
        <View style={styles.dateview}>
        <DatePicker
        style={{width: 300,  backgroundColor:'#158c7a'}}
        date={this.state.selectedStartDate}
        mode="date"
        placeholder="Date"
        format="YYYY-MM-DD"
        minDate={curdate}
        maxDate={maximumdate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
              backgroundColor:'#000000'
          },
          dateInput: {
            marginLeft: 36,

          },
          dateText: {
             color: '#FFFFFF'
           },
           placeholderText: {
             color: '#FFFFFF'
           },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({selectedStartDate: date})}}
      />
  </View>
<View style={styles.timeview}>

      <Icon style={styles.icon}
      name='clock'
      type='feather'
      size={35}
      color='black'
      />

      <View style={styles.dropdownview}>

      <Dropdown

      dropdownOffset={{top:10,left:100}}
      containerStyle={{borderWidth:1, borderColor:'lightgrey',width:260,height:40,  backgroundColor:'#158c7a'}}
      rippleCentered={true}
      inputContainerStyle={{ borderBottomColor: 'transparent' }}
      fontSize = {15}

      labelFontSize= {10}
      baseColor = 'rgba(255,255,255,1)'
        label='                           Time Slot     '
        data={data}
        valueExtractor={({value}) => value}
        onChangeText={(value) => {this.onChange(value)}}
      />


      </View>
  </View>

  <View style={styles.textview}>
        <TextField

         label='Event Type'
         labelFontSize ={20}
         baseColor='rgba(0,0,0,1)'
         textColor='rgba(0,0,0,1)'
         value={eventtype}
         onChangeText={ (eventtype) => this.setState({ eventtype }) }
       />
   </View>
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
    <View style={styles.buttonContainer}>
    <Button
      containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#4d1291',marginTop:20}}
    disabledContainerStyle={{backgroundColor: 'grey'}}
    style={{fontSize: 20, color: '#FFFFFF'}}
    styleDisabled={{color: 'red'}}
    onPress={this.handlePress}>
    Submit
    </Button>
  </View>
  </ScrollView>
    </View>
    );
  }
}

export default HallBook;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    //justifyContent:'space-between',
   alignItems: 'stretch'

  },
  cal:{
    //flex:0.9,
    top: 25,
    backgroundColor:'#FFFFFF'
  },

  dropdownview: {
    //flex:0.8,
    marginTop: 15,
    marginLeft:1,
    marginRight:60,

  },
  text:{
    color: 'white',
  //  marginTop:20,
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Roboto'

  },
  dateview:{
    marginTop:15
  },
  timeview:{
    flexDirection:'row'
  },
  img: {
    backgroundColor: '#214B8C',
    width:400,
    height:180

  },
  textview:{
    marginLeft:37,
    marginRight:60
  },
  buttonContainer: {
   margin: 20,

 }
});
