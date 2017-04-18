import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { cardStyles } from '../OptionPicker/card.styles';
import { NumberInput } from './NumberInput';

export class RangePicker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rangeFrom: props.minValue,
			rangeTo: props.maxValue,
			rangeExceededFrom: false,
			rangeExceededTo: false,
		}
	}

	isRangeExceededFrom(bool) {
		this.setState({
			rangeExceededFrom: bool
		})
	}

	isRangeExceededTo(bool) {
		this.setState({
			rangeExceededTo: bool
		})
	}

  render() {
  	const {
  		iconNameFrom,
			iconNameTo,
			iconColor,
			minValue,
			maxValue,
			titleFrom,
			titleTo
  	} = this.props;

		const rangeFromErrorStyle = this.state.rangeExceededFrom ? styles.rangeError : {};
		const rangeToErrorStyle = this.state.rangeExceededTo ? styles.rangeError : {};

		return (
    	<View style={styles.container}>
				<View style={styles.rangeField}>
					<TouchableOpacity
						style={[cardStyles.card, styles.leftPicker, rangeFromErrorStyle]}
						onPress={() => { this.rangeInputFrom.focus()}}>
						<Icon style={cardStyles.icon}
									name={iconNameFrom}
									size={25}
									color={iconColor}/>

						<NumberInput
							style={[cardStyles.value, styles.rangeInput]}
							placeholder={titleFrom}
							maxLength={4}
							onSubmitEditing={() => this.rangeInputTo.focus()}
							onChangeText={(rangeFrom) => this.setState({rangeFrom})}
							reference={input => this.rangeInputFrom = input}
							isRangeExceeded={this.isRangeExceededFrom.bind(this)}
							minValue={minValue}
							maxValue={maxValue}/>

					</TouchableOpacity>
				</View>

				<View style={styles.rangeField}>
					<TouchableOpacity
						style={[cardStyles.card, styles.rightPicker, rangeToErrorStyle]}
						onPress={() => { this.rangeInputTo.focus()}}>
						<Icon style={cardStyles.icon}
									name={iconNameTo}
									size={25}
									color={iconColor}/>
						<NumberInput
							style={[cardStyles.value, styles.rangeInput]}
							placeholder={titleTo}
							maxLength={4}
							onChangeText={(rangeTo) => this.setState({rangeTo})}
							reference={input => this.rangeInputTo = input}
							isRangeExceeded={this.isRangeExceededTo.bind(this)}
							minValue={minValue}
							maxValue={maxValue}/>

					</TouchableOpacity>
				</View>
			</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		flexDirection: 'row',
		marginHorizontal: -5,
		height: 60
  },
	rangeField: {
  	flex: 5,
		paddingHorizontal: 5
	},
	rangeInput: {
  	textAlign: 'center'
	},
	leftPicker: {
  	borderTopRightRadius: 0,
  	borderBottomRightRadius: 0
	},
	rightPicker: {
  	borderTopLeftRadius: 0,
  	borderBottomLeftRadius: 0
	},
	rangeError: {
		borderWidth: 1,
		borderColor: 'red'
	}
});
