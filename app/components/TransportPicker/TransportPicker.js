import React, { Component } from 'react';
import { Navigator, View, Text, Picker } from 'react-native';

import { TransportTypes } from '../TransportTypes';

type Props = {
  navigator: Navigator
}

export class TransportPicker extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
    this.state = {
      transportType: null,
      bodyStyle: null
    }
  }

  render() {
    return (
      <View>
        <Text>Выберите тип транспорта</Text>
        <TransportTypes />
      </View>
    )
  }
}