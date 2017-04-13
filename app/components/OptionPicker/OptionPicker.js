import React, { Component } from 'react';
import { StyleSheet, Modal, TouchableOpacity, TouchableHighlight, ListView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { cardStyles } from './card.styles';

export class OptionPicker extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

		this.state = {
			modalVisible: false,
			dataSource: this.ds.cloneWithRows(this.props.list)
		}
	}

	setModalVisible(visible) {
		visible && this.setState({
			dataSource: this.ds.cloneWithRows(this.props.list)
		});
		this.setState({modalVisible: visible});
	}

	onItemSelected(rowData) {
		this.props.onItemSelected(rowData);
		this.setModalVisible(false);
	}

	clearSelection() {

		this.setModalVisible(false);
	}

	renderOptionsListRow(rowData) {
		const isActive = rowData.value === this.props.selectedItem;
		const iconName = isActive ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off';
		const iconColor = isActive ? '#2ecc71' : '#7f8c8d';

		return (
			<TouchableOpacity
				style={styles.listRow}
				onPress={this.onItemSelected.bind(this, rowData)}>
				<Icon
					style={styles.listIcon}
					name={iconName}
					size={25}
					color={iconColor}/>
				<Text style={styles.listRowText}>{rowData.name}</Text>
			</TouchableOpacity>
		)
	}

  render() {
		return (
    	<View style={styles.container}>
				<TouchableOpacity style={cardStyles.card}
													onPress={() => { this.setModalVisible(true) }}>
					<Icon style={cardStyles.icon}
								name={this.props.iconName}
								size={25}
								color={this.props.iconColor}/>

					<Text style={cardStyles.title}>{this.props.title}</Text>
					<Text style={cardStyles.value}
								numberOfLines={1}>{this.props.value}</Text>
				</TouchableOpacity>

				<Modal
					animationType={"slide"}
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => { this.setModalVisible(!this.state.modalVisible)}}>

					<View style={styles.header}>
						<TouchableOpacity
							onPress={() => {this.setModalVisible(false)}}
							style={styles.close}>
							<Icon name="ios-arrow-back"
										size={25}
										color="#FFF"/>
						</TouchableOpacity>
						<Text style={styles.title}>{this.props.title}</Text>
						<TouchableOpacity
							onPress={() => {this.clearSelection()}}
							style={styles.close}>
							<Icon name="ios-arrow-back"
										size={25}
										color="#FFF"/>
						</TouchableOpacity>
					</View>

					<View style={styles.modal}>

						<ListView
							key={this.props.selectedItem}
							dataSource={this.state.dataSource}
							renderRow={this.renderOptionsListRow.bind(this)} />

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
	modal: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#34495e'
	},
	listRow: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderBottomColor: '#3b4e61',
		borderBottomWidth: 2,
		flexDirection: 'row'
	},
	listIcon: {
		flex: 0,
		flexBasis: 30
	},
	listRowText: {
		paddingVertical: 2,
		color: '#ecf0f1'
	},
	header: {
		height: 44,
		borderBottomWidth: 1,
		backgroundColor: '#2c3e50',
		borderBottomColor: '#34495e',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10
	},
	close: {
		position: 'absolute',
		padding: 15,
		left: 0
	},
	title: {
		fontSize: 16,
		color: '#FFF'
	}
});
