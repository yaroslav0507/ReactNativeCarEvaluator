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
			category: null,
			bodyStyle: null,
			averagePrice: null,
		}
	}

	componentDidMount() {
		this.props.onViewLoaded();
	}

	getAveragePrice() {
		const { category, bodyStyle, mark } = this.props.filters;
		const query = {
			categoryID: category.value,
			bodyStyleID: bodyStyle.value,
			markID: mark.value
		};
		this.props.onGetAveragePrice(query);
	}

	render() {
	  const {
	  	onCategorySelected,
			onCategoryCleared,
			onBodyStyleSelected,
			onBodyStyleCleared,
			onMarkSelected,
			onMarkCleared,
			categories,
			bodyStyles,
			marks,
			filters: {
	  		category,
				bodyStyle,
				mark
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

				<View >
					<TouchableOpacity
						onPress={() => this.getAveragePrice()}
						style={styles.button}>
						<Text style={styles.buttonText}>Узнать среднюю строимость</Text>
					</TouchableOpacity>
				</View>

				<AveragePrice price={price}/>

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



