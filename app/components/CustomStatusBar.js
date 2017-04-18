import React, {
	Component,
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	StatusBar
} from 'react-native';

import { globalStyles } from '../styles/variables';

const NativeStatusBarWrapper = ({backgroundColor, ...props}) => (
	<View style={[styles.statusBar, { backgroundColor }]}>
		<StatusBar backgroundColor={backgroundColor} {...props} />
	</View>
);

export class CustomStatusBar extends Component {
	render() {
		return (
			<View style={styles.container}>
				<NativeStatusBarWrapper backgroundColor="#242f38" barStyle="light-content" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	statusBar: {
		height: globalStyles.STATUS_BAR_HEIGHT,
	}
});