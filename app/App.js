import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native';

import { AppNavigator } from './AppNavigator';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});