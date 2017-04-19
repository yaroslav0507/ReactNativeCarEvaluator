import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RangePicker } from '../../RangePicker/RangePicker';

export class MileageRange extends Component {
  render() {
		const { rangeFrom, rangeTo, onChangeRangeFrom, onChangeRangeTo } = this.props;

    return (
			<RangePicker
				iconColor="#64DDBB"
				iconNameFrom="ios-speedometer-outline"
				iconNameTo="ios-speedometer-outline"
				titleFrom="От тыс км"
				titleTo="До тыс км"
				minValue={0}
				maxValue={999}
				maxLength={3}
				rangeFrom={rangeFrom}
				rangeTo={rangeTo}
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
