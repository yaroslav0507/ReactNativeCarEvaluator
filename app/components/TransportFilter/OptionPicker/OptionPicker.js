import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ListView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { cardStyles } from './card.styles';
import { OptionPickerModal } from './OptionPickerModal';

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
		this.props.onClearSelection();
		this.setModalVisible(false);
	}

  render() {
		const { iconName, iconColor, title, selectedItem } = this.props;
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
					dataSource={this.state.dataSource}
					modalVisible={this.state.modalVisible}
					selectedItem={selectedItem.value}
					onItemSelected={(rowData) => this.onItemSelected(rowData)}
					setModalVisible={(boolean) => this.setModalVisible(boolean)}
					clearSelection={() => this.clearSelection()}
				/>
			</View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		maxHeight: 60
	}
});
