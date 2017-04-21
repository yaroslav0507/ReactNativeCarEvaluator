import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { OptionPicker } from '../../OptionPicker/OptionPicker';

export class Fuel extends Component {
  render() {
  	const { fuels, selectedFuel, onFuelSelected, onFuelCleared } = this.props;

    return (
			<OptionPicker
				iconName="ios-water-outline"
				iconColor="#FEC606"
				title="Топливо"
				list={fuels.items}
				selectedItem={selectedFuel}
				onItemSelected={(selectedItem) => onFuelSelected(selectedItem)}
				onClearSelection={() => onFuelCleared()}/>
    )
  }
}