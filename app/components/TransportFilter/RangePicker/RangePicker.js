import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { cardStyles } from '../OptionPicker/card.styles';
import { NumberInput } from './NumberInput';

export class RangePicker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rangeFrom: null,
			rangeTo: null,
			rangeExceededFrom: false,
			rangeExceededTo: false,
		}
	}

	valueFitsTheRange(value) {
		const { minValue, maxValue, maxLength } = this.props;
		return value.length === maxLength && value >= minValue && value <= maxValue
	}

	onChangeValueFrom(value) {
		if (this.valueFitsTheRange(value)) {
			this.setState({
				rangeFrom: value,
				rangeExceededFrom: false
			});

			this.state.rangeTo && (value > this.state.rangeTo)
				? this.setState({ reverseOrderError: true })
				: this.setState({ reverseOrderError: false });

			this.props.onChangeRangeFrom(value);
		} else {
			this.setState({ rangeExceededFrom: true })
		}
	}

	onChangeValueTo(value) {
		if (this.valueFitsTheRange(value)) {
			if (value > this.state.rangeFrom) {
				this.setState({
					rangeTo: value,
					rangeExceededTo: false,
					reverseOrderError: false
				});
				this.props.onChangeRangeTo(value);
			} else {
				this.setState({
					reverseOrderError: true
				})
			}
		} else {
			this.setState({ rangeExceededTo: true })
		}
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

						<NumberInput
							style={[cardStyles.value, styles.rangeInput]}
							placeholder={titleFrom}
							maxLength={maxLength}
							onSubmitEditing={() => this.rangeInputTo.focus()}
							onChangeText={this.onChangeValueFrom.bind(this)}
							reference={input => this.rangeInputFrom = input}/>

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
							maxLength={maxLength}
							onChangeText={this.onChangeValueTo.bind(this)}
							reference={input => this.rangeInputTo = input}/>

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
		borderColor: '#c0392b'
	}
});
