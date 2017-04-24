import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, TouchableOpacity, Text, Platform } from 'react-native';
import { globalStyles } from '../../../styles/variables';
import { CustomStatusBar } from '../../shared/CustomStatusBar';

export class Header extends Component {
  render() {
  	const { onLeftButtonPress, title, onRightButtonPress } = this.props;
    return (
    	<View>
				<CustomStatusBar/>
				<View style={styles.header}>
					<TouchableOpacity
						onPress={() => {onLeftButtonPress()}}
						style={styles.back}>
						<Icon name="ios-arrow-back"
									size={25}
									color="#FFF"/>
					</TouchableOpacity>
					<Text style={styles.title}>{title}</Text>
					<TouchableOpacity
						onPress={() => {onRightButtonPress()}}
						style={styles.dismiss}>
						<Icon name="ios-trash-outline"
									size={25}
									color="#FFF"/>
					</TouchableOpacity>
				</View>
			</View>
    )
  }
}

const styles = StyleSheet.create({
	header: {
		position: 'relative',
		height: globalStyles.APP_BAR_HEIGHT,
		borderBottomWidth: 1,
		backgroundColor: '#2c3e50',
		borderBottomColor: '#34495e',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10
	},
	back: {
		position: 'absolute',
		padding: 15,
		left: 0
	},
	dismiss: {
		position: 'absolute',
		padding: 15,
		right: 0
	},
	title: {
		fontSize: 16,
		color: '#FFF'
	}
});
