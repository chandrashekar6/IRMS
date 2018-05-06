import React from 'react';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';
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
