import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RangePicker } from '../../RangePicker/RangePicker';

export class YearRange extends Component {
	constructor(props) {
		super(props);
		this.maxValue = new Date().getFullYear();
	}

  render() {
		const { onChangeRangeFrom, onChangeRangeTo } = this.props;

    return (
			<RangePicker
				iconColor="#9b59b6"
				iconNameFrom="ios-calendar-outline"
				iconNameTo="ios-calendar-outline"
				titleFrom="Год от"
				titleTo="Год до"
				minValue={1940}
				maxValue={this.maxValue}
				maxLength={4}
				onChangeRangeFrom={onChangeRangeFrom}
				onChangeRangeTo={onChangeRangeTo}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
