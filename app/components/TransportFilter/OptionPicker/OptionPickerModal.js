import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Modal, TouchableOpacity, Text, ListView } from 'react-native';

import { Header } from './Header';
import { SearchBox } from '../SearchBox/SearchBox';

export class OptionPickerModal extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.dataSource = this.ds.cloneWithRows(this.props.dataSource);

		this.state = {
			dataSource: this.dataSource
		}
	}

	handleSearch(query) {
		this.setState({ searchTerm: query });
	}

	closeModal() {
		this.handleSearch(null);
		this.props.setModalVisible(false);
	}

	onItemSelected(rowData) {
		this.handleSearch(null);
		this.props.onItemSelected(rowData);
	}

	renderOptionsListRow(rowData) {
		const isActive = rowData.value === this.props.selectedItem;
		const iconName = isActive ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off';
		const iconColor = isActive ? '#2ecc71' : '#7f8c8d';

		return (
			<TouchableOpacity
				style={styles.listRow}
				onPress={() => this.onItemSelected(rowData)}>
				<Icon
					style={styles.listIcon}
					name={iconName}
					size={25}
					color={iconColor}/>
				<Text style={styles.listRowText}>{rowData.name.toString()}</Text>
			</TouchableOpacity>
		)
	}

	renderSearchBox() {
		const minCountOfRows = 10;

		return this.props.dataSource.length > minCountOfRows
			? <SearchBox onChangeText={this.handleSearch.bind(this)}/>
			: null;
	}

  render() {
		const { selectedItem, title, modalVisible, clearSelection } = this.props;

		const filteredAssets = this.state.searchTerm
			? this.props.dataSource.filter(asset => {
					return asset.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) != -1;
				})
			: this.props.dataSource;
		const dataSource = this.ds.cloneWithRows(filteredAssets);

		return (
			<Modal
				animationType={"slide"}
				transparent={false}
				visible={modalVisible}
				onRequestClose={this.closeModal.bind(this)}>

				<Header
					title={title}
					onLeftButtonPress={this.closeModal.bind(this)}
					onRightButtonPress={clearSelection}/>

				<View style={styles.modal}>

					{ this.renderSearchBox() }

					<ListView
						key={selectedItem}
						dataSource={dataSource}
						enableEmptySections={true}
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
		flexDirection: 'row',
		alignItems: 'center'
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
