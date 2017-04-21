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
				iconColor="#5BC0DE"
				title="КПП"
				list={gearboxes.items}
				selectedItem={selectedGearbox}
				onItemSelected={(selectedItem) => onGearboxSelected(selectedItem)}
				onClearSelection={() => onGearboxCleared()}/>
    )
  }
}