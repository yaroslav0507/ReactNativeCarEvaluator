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
				</View>
			)
		}

    return AveragePrice;
  }
}

const styles = StyleSheet.create({
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
