import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { View, TextInput, Text } from 'react-native';

import { Login } from './Login/Login';
import store from '../store';

export class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login/>
      </Provider>
    )
  }
}
