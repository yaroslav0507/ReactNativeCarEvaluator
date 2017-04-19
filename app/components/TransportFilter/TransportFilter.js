import React, { Component } from 'react';
const { StyleSheet, View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } = require('react-native');

import { globalStyles } from '../../styles/variables';
import { AveragePrice } from './AveragePrice';

import { CategoryFilter, BodyStyleFilter, MarkFilter, ModelFilter, YearRange, MileageRange, StateFilter } from './filters';

class TransportFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			yearFrom: props.filters.year.from,
			yearTo: props.filters.year.to,
			mileageFrom: props.filters.mileage.from,
			mileageTo: props.filters.mileage.to,
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

	onChangeMileageFrom(mileageFrom) {
		this.setState({ mileageFrom })
	}

	onChangeMileageTo(mileageTo) {
		this.setState({ mileageTo })
	}

	render() {
		const { filters: { year, mileage }, price } = this.props;

		return (
      <ScrollView style={styles.container}>
				<KeyboardAvoidingView>
					<Text style={styles.title}>Выберите транспорт</Text>
					<CategoryFilter/>
					<BodyStyleFilter/>
					<MarkFilter/>
					<ModelFilter/>
					<YearRange
						rangeFrom={year.from}
						rangeTo={year.to}
						onChangeRangeFrom={this.onChangeYearFrom.bind(this)}
						onChangeRangeTo={this.onChangeYearTo.bind(this)}/>

					<MileageRange
						rangeFrom={mileage.from}
						rangeTo={mileage.to}
						onChangeRangeFrom={this.onChangeMileageFrom.bind(this)}
						onChangeRangeTo={this.onChangeMileageTo.bind(this)}/>

					<StateFilter/>

					<View >
						<TouchableOpacity
							onPress={() => this.getAveragePrice()}
							style={styles.button}>
							<Text style={styles.buttonText}>Узнать среднюю строимость</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
				<AveragePrice price={price} show={!this.state.isFirstAttempt}/>

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
  	paddingBottom: 15,
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



