import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';

import { CustomStatusBar } from './components/CustomStatusBar';
import { AppNavigator } from './AppNavigator';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomStatusBar/>
        <AppNavigator/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});