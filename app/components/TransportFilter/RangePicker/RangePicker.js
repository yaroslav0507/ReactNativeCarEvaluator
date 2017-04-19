import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { cardStyles } from '../OptionPicker/card.styles';
import { NumberInput } from './NumberInput';

export class RangePicker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rangeFrom: props.rangeFrom,
			rangeTo: props.rangeTo,
			rangeExceededFrom: false,
			rangeExceededTo: false,
		}
	}

	valueFitsTheRange(value) {
		const { minValue, maxValue, maxLength } = this.props;
		return value.length === maxLength && value >= minValue && value <= maxValue
	}

	validateRangeField(fieldType, value, cb) {
		let rangeValue;

		if (this.valueFitsTheRange(value)) {
			rangeValue = value;

			this.setState({
				rangeFrom: value,
				rangeExceededFrom: false
			});

			const reverseOrderError = fieldType === 'from'
				? this.state.rangeTo && (value > this.state.rangeTo)
				: this.state.rangeFrom && (value < this.state.rangeFrom);

			this.setState({ reverseOrderError });

		} else {
			rangeValue = null;
			this.setState({ rangeExceededFrom: (value.length !== 0) });
		}
		cb(rangeValue)
	}

	onChangeValueFrom(value) {
		this.validateRangeField('from', value, this.props.onChangeRangeFrom);
	}

	onChangeValueTo(value) {
		this.validateRangeField('to', value, this.props.onChangeRangeTo);
	}

  render() {
  	const {
  		iconNameFrom,
			iconNameTo,
			iconColor,
			titleFrom,
			titleTo,
			maxLength
  	} = this.props;

  	const {
  		rangeTo,
			rangeFrom
		} = this.state;

		const rangeFromErrorStyle = this.state.rangeExceededFrom || this.state.reverseOrderError ? styles.rangeError : {};
		const rangeToErrorStyle = this.state.rangeExceededTo || this.state.reverseOrderError ? styles.rangeError : {};

		return (
    	<View style={styles.container}>
				<View style={styles.rangeField}>
					<TouchableOpacity
						style={[cardStyles.card, styles.rangePicker, styles.leftPicker, rangeFromErrorStyle]}
						onPress={() => { this.rangeInputFrom.focus()}}>
						<Icon style={cardStyles.icon}
									name={iconNameFrom}
									size={25}
									color={iconColor}/>

						<Text style={[styles.rangeTitle, { color: iconColor }]}>{'От'}</Text>

						<NumberInput
							style={[cardStyles.value, styles.rangeInput]}
							placeholder={titleFrom}
							maxLength={maxLength}
							onSubmitEditing={() => this.rangeInputTo.focus()}
							onChangeText={this.onChangeValueFrom.bind(this)}
							reference={input => this.rangeInputFrom = input}
						 	value={rangeFrom}/>

					</TouchableOpacity>
				</View>

				<View style={styles.rangeField}>
					<TouchableOpacity
						style={[cardStyles.card, styles.rangePicker, styles.rightPicker, rangeToErrorStyle]}
						onPress={() => { this.rangeInputTo.focus()}}>
						<Icon style={cardStyles.icon}
									name={iconNameTo}
									size={25}
									color={iconColor}/>
						<Text style={[styles.rangeTitle, { color: iconColor }]}>{'До'}</Text>

						<NumberInput
							style={[cardStyles.value, styles.rangeInput]}
							placeholder={titleTo}
							maxLength={maxLength}
							onChangeText={this.onChangeValueTo.bind(this)}
							reference={input => this.rangeInputTo = input}
							value={rangeTo}/>

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
	rangeTitle: {
  	position: 'absolute',
		fontSize: 10,
		left: 18,
		top: 19,
		backgroundColor: 'transparent'
	},
	rangePicker: {
  	borderWidth: 1,
		borderColor: 'transparent'
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
		borderColor: '#c0392b'
	}
});
