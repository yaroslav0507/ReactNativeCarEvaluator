import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, TextInput } from 'react-native';

export class SearchBox extends Component {
  render() {
  	const { onChangeText } = this.props;
    return (
      <View style={styles.container}>
				<View style={styles.inputWrapper}>
					<Icon style={styles.icon}
								name='ios-search-outline'
								size={25}
								color='#FFF'/>
					<TextInput
						style={styles.textInput}
						autoCorrect={false}
						underlineColorAndroid='transparent'
						onChangeText={onChangeText}/>
				</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: '#3b4e61',
		padding: 10
  },
	inputWrapper: {
  	position: 'relative',
		overflow: 'hidden',
  	flex: 1,
  	backgroundColor: '#2c3e50',
		borderRadius: 50
	},
	textInput: {
		flex: 1,
		height: 40,
		paddingVertical: 0,
		paddingHorizontal: 40,
		color: '#FFF'
	},
	icon: {
  	position: 'absolute',
		paddingVertical: 3,
		paddingLeft: 10,
		paddingRight: 5,
		left: 0,
		top: 0
	}
});
