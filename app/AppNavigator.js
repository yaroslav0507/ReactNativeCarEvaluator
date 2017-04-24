import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { TransportFilterContainer } from './components/TransportFilter/TransportFilterContainer';
import { SearchResultsContainer } from './components/SearchResults/SearchResultsContainer';
import { globalStyles } from './styles/variables';


const AppNavigator = StackNavigator({
	Filters: { screen: TransportFilterContainer },
	Results: { screen: SearchResultsContainer },
}, {
	navigationOptions: {
		title: 'Фильтры',
		headerStyle: {
			backgroundColor: globalStyles.colors.primaryBG
		},
		headerTitleStyle: {
			color: '#FFF'
		}
	}
});

export {
	AppNavigator
}