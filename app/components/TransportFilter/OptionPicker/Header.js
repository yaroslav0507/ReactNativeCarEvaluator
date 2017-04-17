import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export class Header extends Component {
  render() {
  	const { onLeftButtonPress, title, onRightButtonPress } = this.props;
    return (
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
    )
  }
}

const styles = StyleSheet.create({
	header: {
		height: 44,
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
