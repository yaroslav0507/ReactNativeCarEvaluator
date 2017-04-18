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

	onChangeValueFrom(value) {
		let valueFrom;

		if (this.valueFitsTheRange(value)) {
			valueFrom = value;

			this.setState({
				rangeFrom: value,
				rangeExceededFrom: false
			});

			const reverseOrderError = this.state.rangeTo && (value > this.state.rangeTo);
			this.setState({ reverseOrderError });

		} else {
			valueFrom = null;
			this.setState({ rangeExceededFrom: (value.length !== 0) });
		}

		this.props.onChangeRangeFrom(valueFrom);
	}

	onChangeValueTo(value) {
		let valueTo;

		if (this.valueFitsTheRange(value)) {
			valueTo = value;

			this.setState({
				rangeTo: value,
				rangeExceededTo: false,
			});

			const reverseOrderError = this.state.rangeFrom && (value < this.state.rangeFrom);
			this.setState({ reverseOrderError });

		} else {
			this.setState({ rangeExceededTo: (value.length !== 0) });
		}
		this.props.onChangeRangeTo(valueTo);
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
						style={[cardStyles.card, styles.leftPicker, rangeFromErrorStyle]}
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
						style={[cardStyles.card, styles.rightPicker, rangeToErrorStyle]}
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
		top: 20
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
