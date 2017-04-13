import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/variables';

export const cardStyles = StyleSheet.create({
	card: {
		flex: 1,
		backgroundColor: globalStyles.colors.greyXL,
		borderRadius: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 60,
		paddingRight: 25,
		marginBottom: 10
	},
	icon: {
		position: 'absolute',
		left: 15,
		width: 25
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