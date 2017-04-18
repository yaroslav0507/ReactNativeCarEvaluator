import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RangePicker } from '../../RangePicker/RangePicker';

export class YearRange extends Component {
	constructor(props) {
		super(props);
		this.currentYear = new Date().getFullYear();
	}

  render() {
    return (
			<RangePicker
				iconColor="#9b59b6"
				iconNameFrom="ios-calendar-outline"
				iconNameTo="ios-calendar-outline"
				titleFrom="Год от"
				titleTo="Год до"
				minValue={1945}
				maxValue={this.currentYear}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
