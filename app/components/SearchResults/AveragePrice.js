import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

export class AveragePrice extends Component {
	constructor(props) {
		super(props);
	}

  render() {
		const { price } = this.props;
		let AveragePrice = null;

		if (price && price.average) {
			const averagePrice = Math.round(price.average).toString();
			AveragePrice = (
				<View style={styles.container}>
					<View style={styles.averagePriceContainer}>
						<Text style={styles.averagePriceCurrency}>$</Text>
						<Text style={styles.averagePriceValue}>
							{averagePrice}
						</Text>
					</View>
					<Text style={styles.priceUnderline}>-</Text>
					<Text style={styles.averagePriceDescription}>{price.description}</Text>
				</View>
			)
		} else if (this.props.show && !price.isFetching && !price.average) {
			AveragePrice = (
				<View style={styles.averagePriceContainer}>
					<Text style={styles.noResponse}>
						По указанным параметрам не найдено активных обьявлений
					</Text>
				</View>
			)
		}

    return price.isFetching ? (
    	<View style={styles.loadingScreen}>
				<ActivityIndicator
					size="large"
					color="#FFF"/>
			</View>) : AveragePrice;
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	averagePriceContainer: {
		flexDirection: 'row',
		paddingTop: 5,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	averagePriceCurrency: {
		fontSize: 50,
		color: '#7f8c8d'
	},
	averagePriceValue: {
		fontSize: 60,
		color: '#bdc3c7'
	},
	priceUnderline: {
		height: 2,
		width: 140,
		marginBottom: 20,
		backgroundColor: '#2ecc71',
		alignSelf: 'center'
	},
	averagePriceDescription: {
		flex: 3,
		fontSize: 14,
		color: '#bdc3c7',
		paddingHorizontal: 10,
		textAlign: 'center'
	},
	loadingScreen: {
		flex: 1,
		justifyContent: 'center'
	},
	noResponse: {
		color: '#FFF',
		textAlign: 'center',
		paddingHorizontal: 20,
	}
});
