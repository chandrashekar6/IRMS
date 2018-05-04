import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';
import Homescreen from './src/components/Homescreen'
import Halls from './src/components/Halls'

export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <Halls/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#214B8C',
    alignItems: 'center'

  }

});
