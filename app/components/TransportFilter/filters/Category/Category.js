import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { OptionPicker } from '../../OptionPicker/OptionPicker';

export class Category extends Component {
	render() {
  	const { categories, selectedCategory, onCategorySelected, onCategoryCleared } = this.props;

    return (
			<OptionPicker
				iconName="ios-car-outline"
				iconColor="#3498db"
				title="Вид транспорта"
				list={categories.items}
				selectedItem={selectedCategory}
				onItemSelected={(selectedItem) => onCategorySelected(selectedItem)}
				onClearSelection={() => onCategoryCleared()}/>
    )
  }
}