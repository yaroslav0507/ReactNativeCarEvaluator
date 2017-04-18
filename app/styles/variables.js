import { Platform } from 'react-native';

export const globalStyles = {
	colors: {
		primaryBG: '#242f38',
		secondaryBG: '#2c3642',
		greyL: '#929ca6',
	},
	STATUS_BAR_HEIGHT: (Platform.OS === 'ios') ? 20 : 0,
	APP_BAR_HEIGHT: (Platform.OS === 'ios') ? 44 : 56
};