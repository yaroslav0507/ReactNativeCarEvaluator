import React, { Component } from 'react';
const { Navigator, Platform, StyleSheet, View } = require('react-native');

import { Login } from './components/Login/Login';
import { TransportPicker } from './components/TransportPicker/TransportPicker';

export class AppNavigator extends Component {
  renderScene(route, navigator) {
    if (route.name === 'login') {
      return (
        <Login navigator={navigator} {...route.passProps}/>
      );
    }
    if (route.name === 'transportPicker') {
      return (
        <TransportPicker navigator={navigator} {...route.passProps}/>
      );
    }
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }
          if (route.shareSettings || route.friend) {
            return Navigator.SceneConfigs.FloatFromRight;
          } else {
            return Navigator.SceneConfigs.FloatFromBottom;
          }
        }}
        initialRoute={{
          name: 'login'
        }}
        renderScene={this.renderScene}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
