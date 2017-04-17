import React, { Component } from 'react';
const {  StyleSheet, View, Text, Picker, StatusBar, TouchableOpacity } = require('react-native');

import { globalStyles } from '../../styles/variables';
import { AveragePrice } from './AveragePrice';

import { CategoryFilter, BodyStyleFilter, MarkFilter, ModelFilter } from './filters';

class TransportFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFirstAttempt: true
		}
	}

	getAveragePrice() {
		this.setState({
			isFirstAttempt: false
		});
		this.props.onGetAveragePrice();
	}

	render() {
		const { price } = this.props;

		return (
      <View style={styles.container}>
				<StatusBar barStyle="light-content"/>
        <Text style={styles.title}>Выберите тип транспорта</Text>

				<CategoryFilter/>
				<BodyStyleFilter/>
				<MarkFilter/>
				<ModelFilter/>

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



