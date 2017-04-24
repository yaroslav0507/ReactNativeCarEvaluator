import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/variables';

export const viewStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: globalStyles.colors.primaryBG
	},
	title: {
		paddingBottom: 15,
		fontSize: 16,
		textAlign: 'center',
		color: '#FFF'
	},
	button: {
		backgroundColor: '#27ae60',
		padding: 15,
		borderRadius: 50
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFF',
		fontWeight: '700'
	},
	buttonWrapper: {
		height: 80
	}
});