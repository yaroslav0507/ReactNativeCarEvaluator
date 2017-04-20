import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { OptionPicker } from '../../OptionPicker/OptionPicker';

export class Gearbox extends Component {
  render() {
  	const { gearboxes, selectedGearbox, onGearboxSelected, onGearboxCleared } = this.props;

    return (
			<OptionPicker
				iconName="gear"
				iconFont="EvilIcons"
				iconColor="#2CC990"
				title="КПП"
				list={gearboxes.items}
				selectedItem={selectedGearbox}
				onItemSelected={(selectedItem) => onGearboxSelected(selectedItem)}
				onClearSelection={() => onGearboxCleared()}/>
    )
  }
}