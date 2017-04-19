import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ListView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { cardStyles } from './card.styles';
import { OptionPickerModal } from './OptionPickerModal';

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

	onItemSelected(rowData) {
		this.props.onItemSelected(rowData);
		this.setModalVisible(false);
	}

	clearSelection() {
		this.props.onClearSelection();
		this.setModalVisible(false);
	}

  render() {
		const { list, iconName, iconColor, title, selectedItem } = this.props;
		return (
    	<View style={styles.container}>
				<TouchableOpacity style={cardStyles.card}
													onPress={() => { this.setModalVisible(true) }}>
					<Icon style={cardStyles.icon}
								name={iconName}
								size={25}
								color={iconColor}/>
					<Text style={cardStyles.title}>{title}</Text>
					<Text style={cardStyles.value}
								numberOfLines={1}>{selectedItem.name}</Text>
				</TouchableOpacity>

				<OptionPickerModal
					title={title}
					dataSource={list}
					modalVisible={this.state.modalVisible}
					selectedItem={selectedItem.value}
					onItemSelected={this.onItemSelected.bind(this)}
					setModalVisible={this.setModalVisible.bind(this)}
					clearSelection={this.clearSelection.bind(this)}
				/>
			</View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 60
	}
});
