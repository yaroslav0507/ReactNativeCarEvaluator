import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export class NumberInput extends Component {
	constructor(props) {
		super(props);
	}

	onValueChanged(rangeValue) {
		const { minValue, maxValue, maxLength, onChangeText, isRangeExceeded } = this.props;
		if (rangeValue.length === maxLength && rangeValue >= minValue && rangeValue <= maxValue) {
			onChangeText(rangeValue);
			isRangeExceeded(false)
		} else {
			isRangeExceeded(true)
		}
	}

  render() {
  	const { style, placeholder, onSubmitEditing, maxLength, reference } = this.props;

    return (
			<TextInput
				style={style}
				keyboardType={'numeric'}
				placeholder={placeholder}
				placeholderTextColor='#929ca6'
				onSubmitEditing={onSubmitEditing}
				onChangeText={this.onValueChanged.bind(this)}
				maxLength={maxLength}
				ref={reference}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
