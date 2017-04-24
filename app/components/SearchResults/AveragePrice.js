import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

export class AveragePrice extends Component {
	constructor(props) {
		super(props);
	}

  render() {
		const { price } = this.props;
		let AveragePrice = null;

		if (price && price.average && price.exchangeRates) {
			const averagePrice = Math.round(price.average).toString();
			const eurRate = price.exchangeRates.eur.ask;
			const usdRate = price.exchangeRates.usd.ask;

			const priceInEUR = Math.round(price.average * usdRate / eurRate).toString();
			const priceInUAH = Math.round(price.average * usdRate).toString();

			AveragePrice = (
				<View style={styles.container}>
					<View style={[styles.averagePriceContainer, styles.averagePriceContainerMain]}>
						<Text style={styles.averagePriceCurrency}>$</Text>
						<Text style={styles.averagePriceValue}>
							{averagePrice}
						</Text>
					</View>

					<View style={[styles.averagePriceContainer, styles.averagePriceContainerConverted]}>
						<Text style={[styles.averagePriceValue, styles.convertedPrice]}>
							{priceInEUR}
						</Text>
						<Text style={[styles.averagePriceCurrency, styles.convertedPrice]}> EUR</Text>

						<Text style={styles.convertedPriceDelimiter}> / </Text>

						<Text style={[styles.averagePriceValue, styles.convertedPrice]}>
							{priceInUAH}
						</Text>
						<Text style={[styles.averagePriceCurrency, styles.convertedPrice]}> UAH</Text>

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
		justifyContent: 'center',
		alignItems: 'center'
	},
	averagePriceContainerMain: {
		paddingTop: 5,
	},
	averagePriceContainerConverted: {
		paddingBottom: 15
	},
	averagePriceCurrency: {
		fontSize: 50,
		paddingRight: 5,
		color: '#7f8c8d'
	},
	averagePriceValue: {
		fontSize: 60,
		color: '#bdc3c7'
	},
	priceUnderline: {
		height: 2,
		width: 140,
		marginBottom: 10,
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
	convertedPrice: {
		fontSize: 16
	},
	convertedPriceDelimiter: {
		fontSize: 16,
		color: '#2ecc71'
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
