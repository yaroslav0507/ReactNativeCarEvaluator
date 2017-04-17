import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { OptionPicker } from '../../OptionPicker/OptionPicker';

export class BodyStyle extends Component {
  render() {
  	const { selectedCategory, selectedBodyStyle, bodyStyles, onBodyStyleSelected, onBodyStyleCleared} = this.props;

		let BodyStylePicker = null;
		let categoryBodyStyles = bodyStyles[selectedCategory.value];
		if (categoryBodyStyles && categoryBodyStyles.items) {
			BodyStylePicker = (
				<OptionPicker
					iconName="ios-bus-outline"
					iconColor="#2ecc71"
					title="Тип кузова"
					list={categoryBodyStyles && categoryBodyStyles.items}
					selectedItem={selectedBodyStyle}
					onItemSelected={(selectedItem) => onBodyStyleSelected(selectedItem)}
					onClearSelection={() => onBodyStyleCleared()}/>
			)
		}

		return BodyStylePicker
  }
}
