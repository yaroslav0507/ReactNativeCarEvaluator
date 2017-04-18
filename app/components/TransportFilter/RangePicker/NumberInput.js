import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export class NumberInput extends Component {
	constructor(props) {
		super(props);
	}

  render() {
  	const { value, style, placeholder, onChangeText, onSubmitEditing, maxLength, reference } = this.props;

    return (
			<TextInput
				style={style}
				defaultValue={value}
				keyboardType={'numeric'}
				placeholder={placeholder}
				placeholderTextColor='#929ca6'
				onSubmitEditing={onSubmitEditing}
				onChangeText={onChangeText}
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
