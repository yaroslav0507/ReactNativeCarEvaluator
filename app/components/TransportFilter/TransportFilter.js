import React, { Component } from 'react';
const {  StyleSheet, View, Text, Picker, StatusBar, TouchableOpacity } = require('react-native');

import { globalStyles } from '../../styles/variables';
import { OptionPicker } from '../OptionPicker/OptionPicker';
import { AveragePrice } from './AveragePrice';

class TransportFilter extends Component {
	constructor(props) {
		super(props);
		this.dispatch = props.dispatch;
		this.state = {
			isFirstAttempt: true
		}
	}

	componentDidMount() {
		this.props.onViewLoaded();
	}

	getAveragePrice() {
		this.setState({
			isFirstAttempt: false
		});
		this.props.onGetAveragePrice();
	}

	render() {
	  const {
	  	onCategorySelected,
			onCategoryCleared,
			onBodyStyleSelected,
			onBodyStyleCleared,
			onMarkSelected,
			onMarkCleared,
			onModelSelected,
			onModelCleared,
			categories,
			bodyStyles,
			marks,
			models,
			filters: {
	  		category,
				bodyStyle,
				mark,
				model
	  	},
			price
	  } = this.props;

	  let BodyTypePicker = null;
	  let categoryBodyStyles = bodyStyles[category.value];
	  if (categoryBodyStyles && categoryBodyStyles.items) {
			BodyTypePicker = (
				<OptionPicker
					iconName="ios-bus-outline"
					iconColor="#2ecc71"
					title="Тип кузова"
					list={categoryBodyStyles && categoryBodyStyles.items}
					selectedItem={bodyStyle}
					onItemSelected={(selectedItem) => onBodyStyleSelected(selectedItem)}
					onClearSelection={() => onBodyStyleCleared()}/>
			)
		}

		let MarkPicker = null;
		let categoryMarks = marks[category.value];
		if (categoryMarks && categoryMarks.items) {
			MarkPicker = (
				<OptionPicker
					iconName="ios-key-outline"
					iconColor="#e74c3c"
					title="Марка"
					list={categoryMarks && categoryMarks.items}
					selectedItem={mark}
					onItemSelected={(selectedItem) => onMarkSelected(selectedItem)}
					onClearSelection={() => onMarkCleared()}/>
			)
		}

		let ModelPicker = null;
		let categoryModels = models[category.value] && models[category.value][mark.value];
		if (categoryModels && categoryModels.items) {
			ModelPicker = (
				<OptionPicker
					iconName="ios-star-outline"
					iconColor="#f1c40f"
					title="Модель"
					list={categoryModels && categoryModels.items}
					selectedItem={model}
					onItemSelected={(selectedItem) => onModelSelected(selectedItem)}
					onClearSelection={() => onModelCleared()}/>
			)
		}

		return (
      <View style={styles.container}>
				<StatusBar barStyle="light-content"/>
        <Text style={styles.title}>Выберите тип транспорта</Text>

				<OptionPicker
					iconName="ios-car-outline"
					iconColor="#3498db"
					title="Вид транспорта"
					list={categories.items}
					selectedItem={category}
					onItemSelected={(selectedItem) => onCategorySelected(selectedItem)}
					onClearSelection={() => onCategoryCleared()}/>

				{BodyTypePicker}
				{MarkPicker}
				{ModelPicker}

				<View >
					<TouchableOpacity
						onPress={() => this.getAveragePrice()}
						style={styles.button}>
						<Text style={styles.buttonText}>Узнать среднюю строимость</Text>
					</TouchableOpacity>
				</View>

				<AveragePrice price={price} show={!this.state.isFirstAttempt}/>

      </View>
		)
	}
}

export { TransportFilter };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: globalStyles.colors.greyXXL,
  },
	title: {
  	paddingVertical: 20,
		fontSize: 16,
		textAlign: 'center',
		color: '#FFF'
	},
  button: {
    backgroundColor: '#27ae60',
    padding: 15,
		borderRadius: 50
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});



