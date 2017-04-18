import React, { Component } from 'react';
const { Navigator, Platform, StyleSheet, View, BackAndroid } = require('react-native');

import { Login } from './components/Login/Login';
import { TransportFilterContainer } from './components/TransportFilter/TransportFilterContainer';

export class AppNavigator extends Component {
  constructor(props) {
    super(props);

    this._handlers = [];
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton.bind(this))
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this))
  }

  getChildContext() {
    return {
      addBackButtonListener: this.addBackButtonListener,
      removeBackButtonListener: this.removeBackButtonListener,
    };
  }

  addBackButtonListener(listener) {
    this._handlers.push(listener);
  }

  removeBackButtonListener(listener) {
    this._handlers = this._handlers.filter((handler) => handler !== listener);
  }

  handleBackButton() {
    for (let i = this._handlers.length - 1; i >= 0; i--) {
      if (this._handlers[i]()) {
        return true;
      }
    }

    const { navigator } = this.refs;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }

    return false;
  }

  renderScene(route, navigator) {
    if (route.name === 'login') {
      return (
        <Login navigator={navigator} {...route.passProps}/>
      );
    }
    if (route.name === 'filter') {
      return (
        <TransportFilterContainer navigator={navigator} {...route.passProps}/>
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
          name: 'filter'
        }}
        renderScene={this.renderScene}
      />
    )
  }
}

AppNavigator.childContextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
