import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';
import Homescreen from './src/components/Homescreen'
import Halls from './src/components/Halls'
import HallBook from './src/components/HallBook'
import { RootStack } from './src/components/Stack';

export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <RootStack />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
