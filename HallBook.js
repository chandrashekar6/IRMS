import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

class HallBook extends React.Component {

  render() {

    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    return (
      <View style={styles.container}>

      <Dropdown
        label='Favorite Fruit'
        data={data}
      />

    </View>
    );
  }
}

export default HallBook;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#214B8C',
    alignItems: 'center'

  }

});
