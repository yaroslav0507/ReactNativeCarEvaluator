import { StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/variables';

export const cardStyles = StyleSheet.create({
	card: {
		flex: 1,
		height: 60,
		backgroundColor: globalStyles.colors.secondaryBG,
		borderRadius: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 50,
		paddingRight: 25,
		marginBottom: 10
	},
	iconWrapper: {
		position: 'absolute',
		alignItems: 'center',
		left: 15,
		width: 25
	},
	icon: {
		position: 'relative',
		justifyContent: 'center'
	},
	title: {
		flex:1,
		color: globalStyles.colors.greyL
	},
	value: {
		flex: 1,
		color: '#FFF',
		textAlign: 'right'
	}
});