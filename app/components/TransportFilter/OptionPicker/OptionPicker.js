import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ListView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
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
		this.props.list && this.setState({modalVisible: visible});
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
		const { list, iconName, iconFont, iconColor, title, selectedItem } = this.props;

		const renderOptionPickerModal = () => {
			return !list ? null : (
					<OptionPickerModal
						title={title}
						dataSource={list}
						modalVisible={this.state.modalVisible}
						selectedItem={selectedItem.value}
						onItemSelected={this.onItemSelected.bind(this)}
						setModalVisible={this.setModalVisible.bind(this)}
						clearSelection={this.clearSelection.bind(this)}
					/>
				);
		};

		const renderIcon = () => {
			let icon;
			if (iconFont && iconFont === 'EvilIcons') {
				icon = (
					<EvilIcon style={cardStyles.icon}
									name={iconName}
									size={25}
									color={iconColor}/>
				);
			} else {
				icon = (
					<Icon style={cardStyles.icon}
								name={iconName}
								size={25}
								color={iconColor}/>
				);
			}

			return icon;
		};

		return (
    	<View style={[styles.container, !list && styles.disabled]}>
				<TouchableOpacity style={cardStyles.card}
													disabled={!list}
													onPress={() => { this.setModalVisible(true) }}>

					<View style={cardStyles.iconWrapper}>
						{renderIcon()}
					</View>

					<Text style={cardStyles.title}>{title}</Text>
					<Text style={cardStyles.value}
								numberOfLines={1}>{selectedItem.name}</Text>
				</TouchableOpacity>

				{ renderOptionPickerModal() }
			</View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 60
	},
	disabled: {
		opacity: .3
	}
});
