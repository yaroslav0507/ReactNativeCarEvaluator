import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { OptionPicker } from '../../OptionPicker/OptionPicker';

export class State extends Component {
  render() {
  	const { states, selectedState, onStateSelected, onStateCleared } = this.props;

    return (
			<OptionPicker
				iconName="ios-pin-outline"
				iconColor="#E7F76D"
				title="Область"
				list={states.items}
				selectedItem={selectedState}
				onItemSelected={(selectedItem) => onStateSelected(selectedItem)}
				onClearSelection={() => onStateCleared()}/>
    )
  }
}