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
		const { category, bodyStyle } = this.props.filters;
		const query = {
			categoryID: category.value,
			bodyStyleID: bodyStyle.value
		};
		this.props.onGetAveragePrice(query);
	}

	render() {
	  const {
	  	onCategorySelected,
			onCategoryCleared,
			onBodyStyleSelected,
			onBodyStyleCleared,
			categories,
			bodyStyles,
			filters: {
	  		category,
				bodyStyle
	  	},
			price
	  } = this.props;

	  let BodyTypePicker = null;
	  let categoryBodyStyles = bodyStyles[category.value];
	  if (categoryBodyStyles && categoryBodyStyles.items) {
			BodyTypePicker = (
				<OptionPicker
					iconName="ios-construct-outline"
					iconColor="#2ecc71"
					title="Тип кузова"
					value={bodyStyle && bodyStyle.name}
					list={categoryBodyStyles && categoryBodyStyles.items}
					selectedItem={bodyStyle && bodyStyle.value}
					onItemSelected={(selectedItem) => onBodyStyleSelected(selectedItem)}
					onClearSelection={() => onBodyStyleCleared()}/>
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
					value={category && category.name}
					list={categories.items}
					selectedItem={category && category.value}
					onItemSelected={(selectedItem) => onCategorySelected(selectedItem)}
					onClearSelection={() => onCategoryCleared()}/>

				{BodyTypePicker}

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



