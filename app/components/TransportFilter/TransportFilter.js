import React, { Component } from 'react';
const {  StyleSheet, View, Text, Picker, StatusBar, TouchableOpacity } = require('react-native');

import { globalStyles } from '../../styles/variables';
import { OptionPicker } from './OptionPicker/OptionPicker';
import { AveragePrice } from './AveragePrice';

import { CategoryFilter, BodyStyleFilter } from './filters';

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
			onMarkSelected,
			onMarkCleared,
			onModelSelected,
			onModelCleared,
			marks,
			models,
			filters: {
	  		category,
				mark,
				model
	  	},
			price
	  } = this.props;


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

				<CategoryFilter/>
				<BodyStyleFilter/>

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



