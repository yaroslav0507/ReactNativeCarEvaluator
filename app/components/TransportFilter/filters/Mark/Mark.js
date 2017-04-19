import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { OptionPicker } from '../../OptionPicker/OptionPicker';

export class Mark extends Component {
  render() {
  	const { selectedMark, selectedCategory, marks, onMarkSelected, onMarkCleared } = this.props;

		let categoryMarks = marks[selectedCategory.value];

		return (
			<OptionPicker
				iconName="ios-key-outline"
				iconColor="#f1c40f"
				title="Марка"
				list={categoryMarks && categoryMarks.items}
				selectedItem={selectedMark}
				onItemSelected={(selectedItem) => onMarkSelected(selectedItem)}
				onClearSelection={() => onMarkCleared()}/>
		)
  }
}
