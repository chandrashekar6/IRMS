import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';

import DatePicker from 'react-native-datepicker'


var moment = require('moment');

class HallBook extends React.Component {

  state = {
    eventtype: '',
  };

  constructor(props) {
   super(props);
   this.state = {
     selectedStartDate: null
   };
   this.onDateChange = this.onDateChange.bind(this);
 }

 onDateChange(date) {
   this.setState({
     selectedStartDate: date
   });
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
  var curdate = moment().format('YYYY-MM-DD');
  var maximumdate= moment().add(1, 'months').format('YYYY-MM-DD');
    return (
      <View style={styles.container}>


      <View style={styles.cal}>
        <CalendarPicker
          // width={200}
          // height={500}

          minDate={curdate}
          maxDate={maximumdate}
            onDateChange={this.onDateChange}
          />
        </View>

        <View style={styles.selectedview}>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>


      <View style={styles.dropdownview}>

      <Dropdown

      dropdownOffset={{top:10,left:100}}
      containerStyle={{borderWidth:1, borderColor:'lightgrey', borderRadius:50,width:300}}
      rippleCentered={true}
      inputContainerStyle={{ borderBottomColor: 'transparent' }}
      fontSize = {20}
      labelFontSize= {20}
      baseColor = 'rgba(255,255,255,1)'
        label='     Time Slot     '
        data={data}
      />

  </View>

<View style={styles.textview}>
      <TextField

       label='Event Type'
       labelFontSize ={20}
       baseColor='rgba(255,255,255,1)'
       textColor='rgba(255,255,255,1)'
       value={eventtype}
       onChangeText={ (eventtype) => this.setState({ eventtype }) }
     />
 </View>
    </View>
    );
  }
}

export default HallBook;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#214B8C',
    flexDirection: 'column',
    //justifyContent:'space-between',
    //alignItems: 'stretch'

  },
  cal:{
    //flex:0.9,
    top: 25,
    backgroundColor:'#FFFFFF'
  },
  selectedview:{

    marginTop: 25
  },

  dropdownview: {
    //flex:0.8,
    marginTop: 15
  },
  text:{
    color: 'white',
  //  marginTop:20,
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Roboto'

  }

});
