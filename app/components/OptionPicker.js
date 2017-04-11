import React, { Component } from 'react';
import { StyleSheet, Modal, TouchableOpacity, TouchableHighlight, View, Text } from 'react-native';
import { TypePicker } from './TypePicker';
import { globalStyles } from './styles/variables';
import Icon from 'react-native-vector-icons/Ionicons';


export class OptionPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false
		}
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

  render() {
		const { apiURL, onItemSelected } = this.props;

		return (
    	<View style={styles.container}>
				<TouchableOpacity style={styles.card}
													onPress={() => { this.setModalVisible(true) }}>
					<Icon style={styles.icon}
								name={this.props.iconName}
								size={25}
								color={this.props.iconColor}/>

					<Text style={styles.title}>{this.props.title}</Text>
					<Text style={styles.value}>{this.props.value}</Text>
				</TouchableOpacity>

				<Modal
					animationType={"slide"}
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {alert("Modal has been closed.")}}>
					<View style={styles.modal}>
						<TypePicker apiURL={apiURL} onItemSelected={onItemSelected}/>

						<TouchableHighlight
							onPress={() => { this.setModalVisible(!this.state.modalVisible)}}
							style={styles.button}>
							<Text style={styles.buttonText}>Выбрать</Text>
						</TouchableHighlight>

					</View>
				</Modal>
			</View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		maxHeight: 60
	},
  card: {
    flex: 1,
		backgroundColor: globalStyles.colors.greyXL,
		borderRadius: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 60,
		paddingRight: 30,
		marginBottom: 10
  },
	icon: {
  	position: 'absolute',
		left: 15,
		width: 25
	},
	title: {
		color: globalStyles.colors.greyL
	},
	value: {
  	color: '#FFF'
	},
	modal: {
		flex: 1,
		justifyContent: 'center',
		padding: 20
	},
	button: {
		backgroundColor: '#2ecc71',
		padding: 15,
		borderRadius: 50
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFF',
		fontWeight: '700'
	},
});
