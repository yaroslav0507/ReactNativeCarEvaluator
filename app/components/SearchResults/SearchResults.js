import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';
import { AveragePrice } from './AveragePrice';

import { viewStyles } from '../shared/view.styles';

export class SearchResults extends Component {
	static navigationOptions = {
		title: 'Цена',
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onInit();
	}

  render() {
  	const { price } = this.props;

    return (
      <View style={viewStyles.container}>
				<AveragePrice price={price}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
