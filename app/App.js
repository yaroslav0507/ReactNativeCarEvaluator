import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native';

import { AppNavigator } from './AppNavigator';
import { globalStyles } from './styles/variables';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <AppNavigator style={styles.navigatorStyle}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.primaryBG
  },
  navigatorStyle: {
    backgroundColor: '#000'
  }
});