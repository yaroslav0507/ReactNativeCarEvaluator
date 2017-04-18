import React, { Component } from 'react';
const { StyleSheet, View, Text, Picker, StatusBar, TouchableOpacity, ScrollView, KeyboardAvoidingView } = require('react-native');

import { globalStyles } from '../../styles/variables';
import { AveragePrice } from './AveragePrice';

import { CategoryFilter, BodyStyleFilter, MarkFilter, ModelFilter, YearRange } from './filters';

class TransportFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			yearFrom: null,
			yearTo: null,
			isFirstAttempt: true
		}
	}

	getAveragePrice() {
		this.setState({
			isFirstAttempt: false
		});
		this.props.onGetAveragePrice(this.state);
	}

	onChangeYearFrom(yearFrom) {
		this.setState({ yearFrom })
	}
	onChangeYearTo(yearTo) {
		this.setState({ yearTo })
	}

	render() {
		const { filters: { year: { from, to }}, price } = this.props;

		return (
      <ScrollView style={styles.container}>
				<KeyboardAvoidingView>
					<StatusBar barStyle="light-content"/>
					<Text style={styles.title}>Выберите тип транспорта</Text>

					<CategoryFilter/>
					<BodyStyleFilter/>
					<MarkFilter/>
					<ModelFilter/>
					<YearRange
						rangeFrom={from}
						rangeTo={to}
						onChangeRangeFrom={this.onChangeYearFrom.bind(this)}
						onChangeRangeTo={this.onChangeYearTo.bind(this)}/>

					<View >
						<TouchableOpacity
							onPress={() => this.getAveragePrice()}
							style={styles.button}>
							<Text style={styles.buttonText}>Узнать среднюю строимость</Text>
						</TouchableOpacity>
					</View>

					<AveragePrice price={price} show={!this.state.isFirstAttempt}/>
				</KeyboardAvoidingView>
      </ScrollView>
		)
	}
}

export { TransportFilter };

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    padding: 15,
    backgroundColor: globalStyles.colors.primaryBG
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



