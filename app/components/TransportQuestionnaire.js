import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

import { TransportTypes } from './TransportTypes';

export class TransportQuestionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transportType: null,
      bodyStyle: null
    }
  }

  render() {
    return (
      <View>
        <TransportTypes />
      </View>
    )
  }
}