import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { OptionPicker } from '../../OptionPicker/OptionPicker';

export class Model extends Component {
  render() {
  	const { selectedCategory, selectedMark, selectedModel, models, onModelSelected, onModelCleared } = this.props;

		let ModelPicker = null;
		let categoryModels = models[selectedCategory.value] && models[selectedCategory.value][selectedMark.value];
		if (categoryModels && categoryModels.items) {
			ModelPicker = (
				<OptionPicker
					iconName="ios-star-outline"
					iconColor="#f1c40f"
					title="Модель"
					list={categoryModels && categoryModels.items}
					selectedItem={selectedModel}
					onItemSelected={(selectedItem) => onModelSelected(selectedItem)}
					onClearSelection={() => onModelCleared()}/>
			)
		}
		return ModelPicker
  }
}
