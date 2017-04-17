import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export class AveragePrice extends Component {
	constructor(props) {
		super(props);
	}

  render() {
		const { price } = this.props;
		let AveragePrice = null;

		if (price && price.average) {
			AveragePrice = (
				<View style={styles.averagePriceContainer}>
					<Text style={styles.averagePriceValue}>
						{price.average && '$'} {Math.round(price.average)}
					</Text>
					<Text style={styles.averagePriceDescription}>{price.description}</Text>
				</View>
			)
		} else if (this.props.show && !price.isFetching && !price.average) {
			AveragePrice = (
				<View style={styles.averagePriceContainer}>
					<Text style={styles.noResponse}>По указанным параметрам не найдено активных обьявлений</Text>
				</View>
			)
		}

    return price.isFetching ? (
    	<View style={styles.averagePriceContainer}>
				<Text style={styles.noResponse}>Загрузка...</Text>
			</View>) : AveragePrice;
  }
}

const styles = StyleSheet.create({
	averagePriceContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	averagePriceDescription: {
		fontSize: 16,
		color: '#bdc3c7',
		paddingHorizontal: 15,
		textAlign: 'center'
	},
	averagePriceValue: {
		fontSize: 40,
		color: '#bdc3c7'
	},
	noResponse: {
		color: '#FFF',
		textAlign: 'center',
		paddingHorizontal: 20,
	}
});