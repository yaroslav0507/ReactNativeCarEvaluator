import React, { Component } from 'react';
const {  StyleSheet, View, Text, Picker, StatusBar, TouchableOpacity } = require('react-native');

import { TypePicker } from '../TypePicker';
import { globalStyles } from '../styles/variables';
import { OptionPicker } from '../OptionPicker/OptionPicker';

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
		fetch(`http://api.auto.ria.com/average?main_category=${category.id}&body_id=${bodyStyle.id}`)
			.then(response => response.json())
			.then(responseData => {

				const { arithmeticMean, message } = responseData;
				arithmeticMean && this.setState({
					averagePrice: Math.round(arithmeticMean)
				});

				message && this.setState({
					averagePrice: message
				});
			})
	}

	render() {
	  const {
	  	onCategorySelected,
			onBodyStyleSelected,
			categories,
			filters: {
	  		category,
				bodyStyle
	  	}
	  } = this.props;

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
					selectedItem={category.value}
					onItemSelected={(selectedItem) => onCategorySelected(selectedItem)}/>

				<OptionPicker
					iconName="ios-construct-outline"
					iconColor="#2ecc71"
					title="Тип кузова"
					value={bodyStyle && bodyStyle.name}
					list={categories.items}
					selectedItem={category.value}
					onItemSelected={(selectedItem) => onBodyStyleSelected(selectedItem)}/>

				<View >
					<TouchableOpacity
						onPress={() => this.getAveragePrice()}
						style={styles.button}>
						<Text style={styles.buttonText}>Узнать среднюю строимость</Text>
					</TouchableOpacity>
				</View>


				<View style={styles.averagePriceContainer}>
					<Text style={styles.averagePriceValue}>
						{this.state.averagePrice && '$'} {this.state.averagePrice}
					</Text>
				</View>
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
  },
	averagePriceContainer: {
  	flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	averagePriceValue: {
  	fontSize: 40,
		color: '#bdc3c7'
	}
});



