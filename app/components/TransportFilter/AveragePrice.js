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
		alignItems: 'center',
		paddingTop: 5
	},
	averagePriceValue: {
		flex: 2,
		fontSize: 30,
		color: '#bdc3c7'
	},
	averagePriceDescription: {
		flex: 3,
		fontSize: 14,
		color: '#bdc3c7',
		paddingHorizontal: 10,
		textAlign: 'center'
	},
	noResponse: {
		color: '#FFF',
		textAlign: 'center',
		paddingHorizontal: 20,
	}
});
