import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Modal, TouchableOpacity, Text, ListView } from 'react-native';

import { Header } from './Header';

export class OptionPickerModal extends Component {
	constructor(props) {
		super(props);
	}

	renderOptionsListRow(rowData) {
		const isActive = rowData.value === this.props.selectedItem;
		const iconName = isActive ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off';
		const iconColor = isActive ? '#2ecc71' : '#7f8c8d';

		return (
			<TouchableOpacity
				style={styles.listRow}
				onPress={this.props.onItemSelected.bind(this, rowData)}>
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
		const { selectedItem, title, modalVisible, setModalVisible, clearSelection } = this.props;
    return (
			<Modal
				animationType={"slide"}
				transparent={false}
				visible={modalVisible}
				onRequestClose={() => { setModalVisible(!this.state.modalVisible)}}>

				<Header
					title={title}
					onLeftButtonPress={setModalVisible}
					onRightButtonPress={clearSelection}/>

				<View style={styles.modal}>

					<ListView
						key={selectedItem}
						dataSource={this.props.dataSource}
						renderRow={this.renderOptionsListRow.bind(this)} />

				</View>
			</Modal>
    )
  }
}

const styles = StyleSheet.create({
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
	}
});
