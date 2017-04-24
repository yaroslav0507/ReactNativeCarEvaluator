import React, { Component } from 'react';
const { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } = require('react-native');
import { viewStyles } from '../shared/view.styles';

import {
	CategoryFilter,
	BodyStyleFilter,
	MarkFilter,
	ModelFilter,
	YearRange,
	MileageRange,
	StateFilter,
	GearboxFilter,
	FuelFilter
} from './filters';

class TransportFilter extends Component {
	static navigationOptions = {
		title: 'Фильтры'
	};

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

	componentDidMount() {
		this.props.onInit();
	}

	getAveragePrice() {
		this.props.onGetAveragePrice(this.state);
		this.props.navigate('Results');
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
		const { filters: { year, mileage },  } = this.props;

		return (
      <ScrollView style={viewStyles.container} renderToHardwareTextureAndroid={true}>
				<KeyboardAvoidingView>
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
					<GearboxFilter/>
					<FuelFilter/>

					<View >
						<TouchableOpacity
							onPress={() => this.getAveragePrice()}
							style={viewStyles.button}>
							<Text style={viewStyles.buttonText}>Узнать среднюю строимость</Text>
						</TouchableOpacity>
					</View>

				</KeyboardAvoidingView>

			</ScrollView>
		)
	}
}

export { TransportFilter };



